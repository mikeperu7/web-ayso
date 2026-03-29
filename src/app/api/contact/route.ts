import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Faltan campos obligatorios." }, { status: 400 });
    }

    // 1. Base de Datos (Supabase)
    const { data: dbData, error: dbError } = await supabase
      .from("contact_messages")
      .insert([
        {
          nombre: name,
          empresa: company || "",
          email: email,
          mensaje: message,
        },
      ])
      .select();

    if (dbError) {
      console.error("Error al insertar en Supabase:", dbError);
      return NextResponse.json({ success: false, error: "Error guardando en base de datos" }, { status: 500 });
    }
    
    console.log("Supabase API - Inserción exitosa:", dbData);

    // 2. Notificación por Email (Resend)
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await resend.emails.send({
          from: "A&SO Landing Page <onboarding@resend.dev>",
          to: "mich20.18@gmail.com",
          subject: `Nuevo Prospecto Web: ${name} ${company ? `- ${company}` : ''}`,
          html: `
            <h2>Nuevo Mensaje de Contacto (Landing Page)</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <blockquote style="background:#f4f4f5; p:1rem; border-left:4px solid #006489;">
              ${message}
            </blockquote>
          `,
        });
        
        console.log("Resend API - Email enviado exitosamente:", resendResponse);
      } catch (emailError) {
        console.error("Error enviando email con Resend:", emailError);
        // We log but don't fail the request completely if email fails
      }
    }

    // 3. Notificación por WhatsApp Webhook (Flexible/Silenciosa)
    const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "new_lead",
            lead: { name, company, email, message }
          })
        });
      } catch (webhookError) {
        console.error("Error ejecutando webhook de WhatsApp:", webhookError);
        // Silenced failure as requested
      }
    }

    // Respuesta Exitosa
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Error general en el endpoint de contacto:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
