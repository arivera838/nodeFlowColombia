# 🚀 NodeFlow Colombia — Landing Page & Meta Privacy Policy Platform

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green.style=flat-square)](LICENSE)

Sitio web corporativo y plataforma de aterrizaje para **NodeFlow Colombia**, empresa especializada en desarrollo de software a medida, automatización de flujos de trabajo con **n8n**, integración de chatbots inteligentes en **WhatsApp Business Cloud API** con Inteligencia Artificial (LLM Chains) y arquitectura de servidores cloud/DevOps con sede en Medellín, Colombia.

🌐 **Sitio Web Oficial / Producción:** [https://nodeflow.andresrivera.dev](https://nodeflow.andresrivera.dev)

---

## 🌟 Características Principales

1. **Diseño Cyber-Tech & Experiencia de Usuario (UI/UX):**
   - Estética *Dark Cyber-Tech / Glassmorphism* con la paleta de colores oficial de la marca: Cyan Neón (`#00F2FE`), Naranja Flujo (`#FF5E36`), Verde WhatsApp (`#25D366`) y Púrpura IA (`#A855F7`).
   - Micro-interacciones fluídas, tarjetas translúcidas con efectos de luz neón (*glow*) y animaciones de nodos de flujo.

2. **Portafolio Interactivo de 6 Pilares de Servicio:**
   - 📱 **Desarrollo Mobile:** Aplicaciones nativas e híbridas para iOS y Android (React Native & Flutter).
   - 💻 **Desarrollo Web & SaaS:** Aplicaciones full-stack con React, Next.js y backend en la nube.
   - 🗄️ **Diseño y Gestión de Bases de Datos:** Arquitectura optimizada SQL/NoSQL (PostgreSQL, Firebase, MongoDB).
   - ⚡ **Automatización Avanzada:** Integraciones de sistemas y flujos de trabajo con n8n, Make y APIs personalizadas.
   - 🤖 **Chats Inteligentes:** Bots de WhatsApp Business Cloud API conectados a modelos de lenguaje (ChatGPT/Gemini).
   - 🛡️ **Soporte Técnico Especializado & DevOps:** Infraestructura Cloud, monitoreo 24/7 y pipelines CI/CD con Docker.

3. **Demostraciones Interactivas:**
   - **Calculadora de ROI:** Deslizadores interactivos para que empresas y PyMEs calculen el ahorro proyectado en tiempo (horas/mes) y presupuesto (COP/año) mediante automatizaciones de NodeFlow.
   - **Widget Flotante Asistente de WhatsApp IA (`WhatsAppWidget.jsx`):** Simulación interactiva de chat flotante en tiempo real con respuestas instantáneas del bot n8n + enlace directo al chat oficial.
   - **Showcase de Flujo n8n:** Simulador visual del nodo de procesamiento `Basic LLM Chain` y la arquitectura de integración.

4. **Página de Política de Privacidad Meta (`/politica-de-privacidad`):**
   - Cumplimiento estricto de la **Ley Estatutaria 1581 de 2012 de Colombia (Habeas Data)**.
   - Cumplimiento de los **Términos de Plataforma de Meta Developers** (WhatsApp Cloud API / Facebook Apps).
   - **Instrucciones para la Eliminación de Datos de Usuarios (*Meta Data Deletion Callback*):** Formulario directo interactivo con generación de ticket de confirmación (`DEL-XXXXXX`) y canal de soporte por correo para aprobación en la consola de Meta App Review.

5. **Optimización SEO Avanzada:**
   - Componente modular `<SEO />` mediante `react-helmet-async`.
   - Meta etiquetas Open Graph (`og:title`, `og:description`, `og:image`) y Twitter Cards.
   - **Datos Estructurados JSON-LD (Schema.org):** Esquemas de `ProfessionalService` y `OfferCatalog` con geolocalización en Medellín, Colombia.
   - Archivos de indexación estáticos [`sitemap.xml`](file:///Users/macuser/Documents/develop/nodeflow-colombia/public/sitemap.xml) y [`robots.txt`](file:///Users/macuser/Documents/develop/nodeflow-colombia/public/robots.txt).

6. **Despliegue Contenedorizado con Docker & Nginx:**
   - [`Dockerfile`](file:///Users/macuser/Documents/develop/nodeflow-colombia/Dockerfile) multi-etapa (*multi-stage build*) con Node 20 y servidor Nginx Alpine ultraligero.
   - Configuración de Nginx con soporte para rutas SPA React Router (`try_files $uri $uri/ /index.html`), compresión Gzip y encabezados de seguridad.
   - [`docker-compose.yml`](file:///Users/macuser/Documents/develop/nodeflow-colombia/docker-compose.yml) para orquestación instantánea.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework Frontend** | React 18 + Vite 5 |
| **Enrutamiento** | React Router DOM v6 |
| **Estilos & UI** | Tailwind CSS 3 + Custom Glassmorphism |
| **Iconografía** | Lucide React |
| **Gestión SEO** | React Helmet Async + JSON-LD Schema |
| **Servidor Web Producción** | Nginx Alpine (Gzip, SPA Fallback, Security Headers) |
| **Contenedorización** | Docker Multi-Stage + Docker Compose |

---

## 📁 Estructura del Proyecto

```text
nodeflow-colombia/
├── Dockerfile                  # Multi-stage Docker build config
├── docker-compose.yml          # Docker Compose container orchestrator
├── nginx.conf                  # Production Nginx config (SPA routing & gzip)
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Tailwind custom palette & keyframes
├── vite.config.js              # Vite bundler settings
├── public/
│   ├── favicon.svg             # NodeFlow Colombia icon
│   ├── robots.txt              # Search engine crawler directive
│   └── sitemap.xml             # XML Sitemap (domain: nodeflow.andresrivera.dev)
└── src/
    ├── main.jsx                # React app entry point
    ├── App.jsx                 # App routes definition & HelmetProvider
    ├── index.css               # Global tailwind directives & glassmorphic styles
    ├── components/
    │   ├── SEO.jsx             # Meta tags, OpenGraph & JSON-LD component
    │   ├── Navbar.jsx          # Glassmorphic header & responsive mobile menu
    │   ├── Hero.jsx            # Impact headline & interactive workflow card
    │   ├── Services.jsx        # 6 core service pillars grid
    │   ├── AutomationShowcase.jsx # n8n + WhatsApp API workflow showcase
    │   ├── RoiCalculator.jsx   # Interactive time & cost savings calculator
    │   ├── ContactModal.jsx    # Project quote form & WhatsApp integration
    │   ├── WhatsAppWidget.jsx  # Floating live interactive AI bot chat
    │   └── Footer.jsx          # Corporate footer with legal policy links
    └── pages/
        ├── Home.jsx            # Landing page wrapper
        └── PrivacyPolicy.jsx   # Meta App Data Deletion & Habeas Data policy page
```

---

## 💻 Desarrollo Local

### Requisitos Previos
- Node.js `v18+` o `v20+`
- npm `v9+` o `v10+`

### Pasos de Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/arivera838/nodeFlowColombia.git
   cd nodeFlowColombia
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:3000`.

---

## 🏗️ Compilación y Despliegue con Docker

### Opción A: Compilación Estática con Vite
```bash
npm run build
```
Los archivos optimizados para producción se generarán en la carpeta `./dist`.

### Opción B: Ejecución con Docker Compose (Recomendado para Servidor Cloud)
```bash
docker compose up --build -d
```
La aplicación se compilará e iniciará automáticamente en Nginx escuchando en el puerto `8080` (o el puerto expuesto de tu servidor).

Para verificar el estado del contenedor:
```bash
docker compose ps
docker logs -f nodeflow_colombia_landing
```

---

## 📜 Licencia

Desarrollado para **NodeFlow Colombia** © 2026. Todos los derechos reservados.
