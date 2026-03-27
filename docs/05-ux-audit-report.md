# Reporte de Auditoría UX/UI y CRO - A&SO Landing Page v1.0

**Fecha:** 26 de Marzo de 2026
**Rol:** Director de Arte UI/UX & Experto CRO
**Objetivo:** Evaluar la iteración 1.0 de la Landing Page y proponer un plan de acción para maximizar la retención, la confianza B2B y la tasa de conversión.

---

## 1. Resumen Ejecutivo
La estructura actual (v1.0) implementada en `src/app/page.tsx` es sólida y cumple con la arquitectura de información definida por los principios de CRO industrial. Sin embargo, a nivel estético y de validación de confianza (Trust Signals), la página se siente "cruda" en áreas clave. Para competir como una firma SSOMA de alto nivel, necesitamos pasar de una estructura "correcta" a una experiencia "premium".

---

## 2. Hallazgos de Auditoría (Lo Positivo y Lo Crudo)

### A. Branding y Recordación de Marca (Logo A&SO)
*   **Estado Actual:** El logo está implementado como texto (`<span className="text-2xl font-black italic...">A&SO</span>`).
*   **Diagnóstico ("Crudo"):** El texto no genera suficiente impacto visual ni recordación de marca. El Navbar pierde peso jerárquico y el Footer se siente genérico.
*   **Oportunidad:** Reemplazar el texto tipográfico con el logotipo corporativo real en SVG/PNG para inyectar autoridad inmediata.

### B. Prueba Social (Componente TrustBar)
*   **Estado Actual:** Marquee animado con nombres de clientes en modo texto (Ransa, Laive, Arcor).
*   **Diagnóstico ("Crudo"):** En ventas B2B, el cerebro humano procesa imágenes corporativas 60,000 veces más rápido que el texto. Leer "Ransa" no tiene el mismo impacto psicológico de validación que ver el logo de Ransa.
*   **Oportunidad:** Migrar a un asset visual usando `next/image`.

### C. Pulido Visual y Microinteracciones (UI Polish)
*   **Contraste Tipográfico (Inter):** La familia `Inter` es excelente, pero algunos textos secundarios en `text-brand-slate` pueden necesitar un ajuste de opacidad o peso para no competir con los titulares en `brand-dark`.
*   **Tarjetas de Servicios:** Las tarjetas tienen un buen efecto *hover* (borde naranja inferior y elevación), pero el *padding* interno puede sentirse un poco ajustado en móviles.
*   **Formulario de Contacto:** Visualmente limpio, pero los *inputs* con fondo `zinc-50` sobre fondo de sección blanco pueden perder definición. El área requiere mayor "respiración" (whitespace) entre los *labels* y los campos.

---

## 3. Plan de Acción (Fase de Pulido UI/UX)

A continuación, la hoja de ruta técnica exacta para implementar estas mejoras en la siguiente iteración de código:

### Paso 1: Jerarquía de Marca (Logo Corporativo)
*   **Acción:** Reemplazar el logo de texto en `Navbar.tsx` y `Footer.tsx` por el componente `<Image />` de Next.js.
*   **Técnica:** 
    *   `src/components/layout/Navbar.tsx`: Insertar `<Image src="/logo-ayso.png" alt="A&SO Logo" width={140} height={48} className="object-contain" priority />`.
    *   `src/components/layout/Footer.tsx`: Insertar `<Image src="/logo-ayso-blanco.png" alt="A&SO Logo" width={160} height={55} className="object-contain" />`.
*   *(Nota: Solicitaremos los assets gráficos reales o generaremos placeholders del tamaño correcto).*

### Paso 2: Refactorización de la Prueba Social (TrustBar V2)
*   **Acción:** Migrar el marquee de texto a un carrusel de imágenes reales.
*   **Técnica:** 
    *   Modificar `TrustBar.tsx` para mapear un array de rutas de imagen (`/clients/ransa.png`, etc.).
    *   Usar `<Image src={client.logo} alt={client.name} width={120} height={60} className="object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />`.
    *   *CRO Tip:* El filtro `grayscale` predeterminado evita que el colorido de otros logos abrume nuestra paleta de colores nativa, devolviendo el color solo en el estado `hover`.

### Paso 3: Optimización de Espacios y Contraste (UI Polish)
*   **ServicesCatalog.tsx:** 
    *   Aumentar el padding de las tarjetas en escritorio de `lg:p-10` a `lg:p-12`.
    *   Suavizar la sombra inicial de `shadow-sm` a un borde más fino y transparente de `border-brand-blue/10` para un look "Ghost".
*   **ContactSection.tsx:**
    *   Mejorar la definición del formulario usando un fondo blanco puro con una sombra más amplia y difuminada (`shadow-2xl shadow-brand-blue/5`).
    *   Aumentar el *gap* entre los inputs (`space-y-4` a `space-y-6`).
    *   Mejorar los *labels* pasándolos a `text-brand-dark font-bold` para guiar mejor el ojo del usuario.
*   **Hero.tsx:**
    *   Asegurar que el CTA principal (`bg-brand-orange`) tenga suficiente "Click Area" (aumentar padding a `px-10 py-5`).

---
**Siguiente iteración sugerida:** Recopilar/generar los assets (logotipos) y ejecutar las refactorizaciones de código listadas en el Plan de Acción.
