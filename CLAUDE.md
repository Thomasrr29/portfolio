# CLAUDE.md — Portfolio Thomas Restrepo
# Stack: Astro + TypeScript + CSS
# Deploy: Vercel → portfolio-gamma-roan-67.vercel.app

---

## Contexto del proyecto

Portfolio profesional de Thomas Restrepo, 19 años, Medellín, Colombia.
Repo: github.com/Thomasrr29/portfolio
Stack actual: Astro (template básico) + TypeScript + CSS vanilla.
El proyecto está en el template inicial de Astro — casi todo
está por construir desde cero sobre esa base.

NO migrar a otro framework. Construir todo en Astro.
Componentes en .astro, estilos en CSS con variables, TypeScript donde aplique.

---

## El ángulo psicológico central

El lector (reclutador de Rappi, Trii, Melonn) verá "19 años" y
esperará proyectos de tutorial o ejercicios académicos.

Lo que encontrará en cambio:
- Integración de pagos Wompi con webhooks en producción real
- CRM con flujo completo: requerimientos → Prisma ORM → deployment
- Co-fundador activo construyendo un producto con clientes reales

Ese contraste — expectativa baja, realidad alta — es el gancho.
Ejecutarlo requiere dos cosas: especificidad técnica real
y honestidad absoluta. Cero fabricación.

---

## Posicionamiento

Título en el hero: "Product Engineer"
Subtítulo: "Medellín, Colombia"

NUNCA usar: Full Stack Developer, Software Engineer,
Technology Administrator, Desarrollador Web.

Por qué "Product Engineer": Thomas no solo ejecuta código.
Levanta requerimientos, diseña el sistema, desarrolla,
despliega y da soporte. Ciclo completo. Eso lo diferencia
de un dev junior que solo implementa tickets.

Pitch del hero (máximo 2 líneas, voz directa, sin adjetivos vacíos):
"Construyo sistemas completos desde los requerimientos hasta
el deployment. Integración de pagos reales, CRM en producción,
y una startup DOOH en construcción activa."

---

## Experiencias — solo lo verificable, en este orden

### 1. Funeraria San Gabriel
Rol: Software Engineer
Período: Jul 2024 – Presente
Repositorios: privados en GitHub (disponibles en entrevista)

Proyectos reales ejecutados:

A. Integración de Pagos Wompi
   · Integré la API de Wompi para procesar pagos digitales en el negocio
   · Implementé webhooks para confirmar transacciones en tiempo real
   · Manejé ciclo de estados: pendiente → confirmado → rechazado
   · Stack: Node.js · Wompi API · Webhooks · Railway

B. CRM Funerario — flujo completo
   · Lideré el proceso completo: requerimientos → diseño de BD
     → desarrollo → deployment en producción
   · Modelé la base de datos con Prisma ORM + PostgreSQL
   · Gestión de clientes, servicios activos y estados del proceso
   · Deployment en Railway con Docker
   · Stack: Node.js · Prisma ORM · PostgreSQL · Docker · Railway

C. Sistema de Mensajes Masivos
   · Automatización de comunicaciones a clientes del negocio
   · Integración con APIs externas de mensajería
   · Stack: Node.js · APIs externas · Railway

### 2. ShareFlow — Co-Founder · Product Engineer
Período: Oct 2024 – Presente

Qué es ShareFlow (honesto — NO exagerar):
Startup en construcción activa. Ecommerce de publicidad en
pantallas digitales (DOOH) para Colombia. Versión parcial
desplegada, sin transacciones completadas todavía.
Actualmente integrando Wompi para cerrar el flujo de pago.

Bullets para ShareFlow:
· Co-fundé y lidero el desarrollo técnico de una plataforma DOOH
  para democratizar acceso a publicidad en pantallas digitales
· Diseñé la arquitectura completa del ecommerce:
  cotización → aprobación → pago → orden al proveedor
· Stack: Next.js App Router · TypeScript · Supabase · Railway · Docker
· Versión parcial en producción · Wompi en integración activa
· Negocié acuerdo con operador de tótems en Envigado

Badge visual: "En construcción activa" — no ocultar este estado,
presentarlo como fortaleza: un founder que construye en tiempo real.

### 3. Kodland — Python & Web Instructor
Período: Dic 2023 – Ago 2024
· Enseñé Python y desarrollo web a estudiantes de 8–16 años
· Desarrollé capacidad de explicar sistemas complejos en lenguaje
  simple — habilidad que aplico hoy con clientes y equipos no técnicos

---

## Stack técnico — solo lo usado en proyectos reales

Mostrar en 3 grupos, con ese nombre exacto:

"En producción"
Node.js · PostgreSQL · Prisma ORM · Docker · Railway
Wompi API · Webhooks · REST APIs

"En construcción activa"
Next.js (App Router) · TypeScript · Supabase · Astro

"Conocimiento adicional"
React · Python · NestJS

NO incluir: WordPress · Elementor · PHP · MongoDB · Vue
Diluyen el perfil y no son relevantes para el target.

---

## Proyectos — solo los reales, en este orden

01 — CRM Funerario + Pagos Wompi
Descripción: Sistema de gestión de clientes y servicios para negocio
activo. Flujo completo desde modelado de BD hasta deployment.
Incluye integración de pagos con webhooks en tiempo real.
Badge: Privado · disponible en entrevista
Stack tags: Node.js · Prisma ORM · PostgreSQL · Wompi · Docker · Railway

02 — Sistema de Mensajes Masivos
Descripción: Automatización de comunicaciones a clientes de
la funeraria mediante integración con APIs externas de mensajería.
Badge: Privado · disponible en entrevista
Stack tags: Node.js · APIs externas · Railway

03 — ShareFlow DOOH Ecommerce
Descripción: Plataforma para compra y venta de publicidad en
pantallas digitales en Colombia. Versión parcial desplegada.
Integrando Wompi para cerrar el flujo de pago completo.
Badge: En construcción activa
Link: [URL de ShareFlow si existe]
Stack tags: Next.js · TypeScript · Supabase · Wompi · Docker

NO incluir proyectos académicos: HOMY, ORM-Practice, Essential,
LibraryNest, affiliate_system. No aportan al perfil target.

---

## Educación

ITM — Institución Universitaria
Administración Tecnológica · 2023 – Presente

Nota de contexto (usar debajo del nombre de la carrera):
"Estudio administración, no sistemas — lo que significa que cuando
diseño un sistema, pienso primero en el problema de negocio."

---

## Contacto

Email: thomasrr29@gmail.com
LinkedIn: linkedin.com/in/thomasrpo
GitHub: github.com/Thomasrr29

---

## Diseño — instrucciones exactas para Astro + CSS

Tipografía (importar desde Google Fonts):
- Display / nombres: DM Serif Display
- Body / UI: Outfit (weights: 300, 400, 500)
- Tags / labels / monospace: DM Mono (weights: 400, 500)

Variables CSS (definir en :root en un archivo global.css):
--accent: #1D9E75;
--accent-light: #E1F5EE;
--accent-dark: #085041;
--text-primary: inherit del sistema
--text-muted: color secundario del sistema
--border: 0.5px solid rgba(0,0,0,0.12)
--radius-md: 8px;
--radius-lg: 12px;

Estilo general:
· Editorial minimal. Sin gradientes. Sin glassmorphism. Sin sombras.
· Sin Inter, Roboto, Space Grotesk — son genéricos y diluyen la identidad.
· Layouts con asimetría intencional en el hero (nombre grande izquierda,
  contacto derecha). Grid limpio para proyectos y stack.
· Separadores de sección: línea 0.5px + label DM Mono uppercase 11px
  con color acento. Misma altura visual en todas las secciones.
· Tags de stack: DM Mono 10-11px · padding 4px 8px · fondo neutro
  claro · border 0.5px · border-radius 4px.
· Animaciones: SOLO fade-in + translateY(8px) → 0 en entrada,
  con stagger entre elementos. Nada más. Sin hover effects en exceso.
· Dark mode: soportar via prefers-color-scheme. Fondo oscuro neutro
  (no negro puro), acento #1D9E75 funciona en ambos modos.

Estructura de archivos Astro a crear:
src/
  components/
    Hero.astro
    Experience.astro
    ExperienceItem.astro
    Stack.astro
    Projects.astro
    ProjectCard.astro
    Education.astro
    Contact.astro
    SectionLabel.astro   ← componente reutilizable para labels de sección
  layouts/
    Layout.astro         ← ya existe, modificar head con fonts + meta
  pages/
    index.astro          ← importar todos los componentes en orden
  styles/
    global.css           ← variables CSS, reset, tipografía base

Orden de secciones en index.astro:
1. Hero
2. Experience
3. Stack
4. Projects
5. Education
6. Contact

---

## Técnicas de persuasión — ejecutar en el copy, no solo en el diseño

1. CONTRASTE DE EXPECTATIVA
   El hero debe generar el quiebre en los primeros 5 segundos.
   Palabras obligatorias en el primer scroll: "producción", "deployment",
   "webhooks", "co-fundador", "flujo completo".
   El lector que esperaba un estudiante encuentra un builder.

2. ESPECIFICIDAD COMO CREDIBILIDAD
   "Integré Wompi con webhooks para confirmar estados en tiempo real"
   convence más que "desarrollé sistema de pagos".
   Siempre especificar. Nunca generalizar lo que puede ser concreto.

3. HONESTIDAD COMO SEÑAL DE MADUREZ
   ShareFlow se presenta como "en construcción activa" con badge visible.
   Un candidato que distingue entre lo que hizo y lo que está haciendo
   es raro y valioso. Eso genera más confianza que inflar métricas.

4. PRUEBA DE ACCESO IMPLÍCITA
   "Repositorio privado — disponible en entrevista" comunica:
   el código existe, hay confianza en mostrarlo, no hay nada que ocultar.
   Más efectivo que simplemente no mencionar que es privado.

5. VOZ PROPIA, NO CORPORATIVA
   Cada sección de experiencia cierra con una línea en primera persona
   que humaniza el perfil. Ejemplos:
   · Funeraria: "Primer sistema en producción real: aprendí que un
     buen software es el que el negocio usa todos los días."
   · ShareFlow: "Construir una startup enseña lo que ningún tutorial
     puede: que el producto más difícil es el que realmente importa."
   · Estas líneas van en itálica, tamaño ligeramente menor, color muted.

---

## Reglas absolutas — no negociables

· CERO fabricación. Si no está en este CLAUDE.md, no existe.
· NUNCA presentar ShareFlow con métricas de facturación o usuarios.
· NUNCA usar "Full Stack Developer" en ninguna parte del sitio.
· SIEMPRE que aparezca la funeraria: mencionar flujo completo
  (requerimientos → deployment). Ese es el diferenciador clave.
· SIEMPRE que aparezca ShareFlow: dejar claro que está en
  construcción activa con versión parcial desplegada.
· Bullets de experiencia = ACCIÓN + ESPECIFICIDAD TÉCNICA. Nunca
  solo responsabilidades genéricas.
  MAL: "Desarrollé un CRM para la empresa"
  BIEN: "Diseñé e implementé CRM funerario con Prisma ORM desde
        el modelado de BD hasta el deployment en Railway con Docker"
· El portfolio completo debe poder leerse en 45 segundos y dejar
  claro: (1) quién es, (2) qué ha construido, (3) con qué stack.