Fecha: 25 de Marzo de 2026

Decisión: Usar constitution.md desde el minuto cero y delegar la inicialización a un agente con rol de DevOps.

Por qué funciona: Evita que el agente asuma versiones antiguas de frameworks. Al darle reglas estrictas primero, el código generado desde el inicio respeta TypeScript y el App Router de Next.js.

Siguiente vez: Clonar esta carpeta docs/ directamente al nuevo proyecto.


Fecha: 25 de Marzo de 2026.

Decisión: Hacer commit inicial a GitHub antes de crear componentes y pre-definir las carpetas dentro de src/.

Por qué funciona: Al crear las carpetas vacías por adelantado (como components/ui o lib), obligamos a los futuros agentes a colocar los archivos en el lugar correcto por inferencia visual. Esto mantiene la arquitectura limpia sin tener que gastar tokens repitiéndole la estructura en cada nuevo prompt.


Fecha: 26 de Marzo de 2026.

Decisión: Integración de Despliegue Continuo (CI/CD) con Vercel conectando el repositorio de GitHub.

Por qué funciona: Configurar Vercel antes de escribir lógica compleja garantiza que la configuración base es compatible con producción. Ahora tenemos un ciclo de feedback instantáneo: Prompt al Agente -> Revisión -> Git Push -> Web Actualizada.



Supabase poner contraseña

Enable Data Api (check)
Enable automatic RLS (check)


Fecha: 26 de Marzo de 2026.

Decisión: Integración del cliente de Supabase aislando las credenciales en .env.local.

Por qué funciona: Mantener las llaves fuera del prompt del agente evita que se filtren en el historial de chat o en los logs de Antigravity. Usar un cliente centralizado en src/lib/supabase.ts asegura que toda la aplicación use una sola conexión a la base de datos, optimizando el rendimiento.


Fecha: 26 de Marzo de 2026.

Decisión: Acotar el Sprint 1 exclusivamente a la Landing Page estática, postergando la Intranet y la lógica de base de datos para el Sprint 2.

Por qué funciona: Limitar el trabajo en progreso (WIP - Work In Progress) nos permite tener un entregable funcional e indexable por Google (SEO) mucho más rápido. Es mejor tener una web pública funcionando en 2 días, que un sistema completo a medias en 2 meses.


Fecha: 26 de Marzo de 2026.

Decisión: Acotar el Sprint 1 exclusivamente a la Landing Page estática/UI, pausando el backend. Creación del 03-design-system.md.

Por qué funciona: Alimentar al agente con un "Design System" en texto plano asegura que todos los componentes que genere en el futuro respeten los colores y tipografías exactas del manual de marca, evitando inconsistencias visuales. Separar el análisis UX (Estructura) del desarrollo (Código) evita que el agente alucine componentes innecesarios.


Fecha: 26 de Marzo de 2026.

Decisión: Separar el contenido estricto (04-content.md) del código y del diseño.

Por qué funciona: En 2026, el mayor error al usar agentes de IA para frontend es pedirles que "diseñen, programen e inventen el texto" al mismo tiempo. Al darle los archivos 03-design-system.md y 04-content.md ya listos, limitamos su trabajo exclusivamente a escribir código limpio en React/Next.js, eliminando las alucinaciones de texto.



Fecha: 26 de Marzo de 2026.

Decisión: Uso de "Cards" (Tarjetas) interactivas para el catálogo de servicios.

Por qué funciona: En UX/UI, agrupar información en tarjetas con íconos reduce la "carga cognitiva". El cerebro del usuario procesa la imagen (el ícono) en milisegundos y sabe de qué trata la sección antes de leer una sola palabra. Es la forma más rápida de comunicar valor técnico.



Fecha: 26 de Marzo de 2026.

Decisión: Separar la información de contacto y el formulario en la parte inferior, cerrando con un Footer oscuro.

Por qué funciona: En CRO (Optimización de Tasa de Conversión), colocar el formulario al final del recorrido del usuario funciona porque le pides sus datos después de haberle demostrado valor (con los servicios y los clientes). El Footer oscuro crea un "cierre visual" que le indica al cerebro que la página ha terminado.