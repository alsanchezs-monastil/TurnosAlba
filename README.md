# Turnos Alba - Gestión

Aplicación web progresiva (**PWA instalable** en Android, iOS y ordenador) para la gestión de cuadrantes de enfermería con porcentaje de jornada configurable, preparada para desplegar en **GitHub + Netlify** con sincronización automática entre dispositivos mediante **Netlify Blobs**.

## Características principales

- **Instalable como App nativa (PWA):** Incluye `manifest.webmanifest`, iconos PNG de `192x192` y `512x512` (estándar y *maskable*) y Service Worker (`sw.js`) para que Chrome y Safari permitan instalarla directamente en la pantalla de inicio.
- **Calendario interactivo con gestos:**
  - Navegación deslizando el dedo hacia izquierda/derecha (o con flechas).
  - Relleno automático del patrón habitual: **Lunes, Miércoles, Jueves y Viernes de Mañana (`A.M.`)** y **Martes de Tarde (`A.T.`)**.
  - Paleta de pinceles rápidos debajo del calendario: `A.M.`, `A.T.`, `L.M.`, `L.T.`, `F.` (Festivo), `V.` (Vacaciones), `LD` (Libre Disposición), `C.V.` (Cierre · Vacaciones con franjas) y `C.LD` (Cierre · LD con franjas).
- **Recuento Anual y Mensual:**
  - Alternancia entre **Visión Anual** (con tabla de los 12 meses y fila de **Total anual**) y **Visión Mensual**.
  - Seguimiento de **Vacaciones** y **LD** clasificados automáticamente en **Disfrutados**, **Previstos** y **Pendientes**, con desplegable de fechas exactas.
- **Sincronización en la nube (Netlify Blobs) y PIN:**
  - Sincronización automática entre dispositivos sin necesidad de configurar bases de datos externas.
  - Pantalla de bloqueo por **PIN de 4 dígitos** (`1234` por defecto, editable en Ajustes o mediante la variable de entorno `APP_PIN` en Netlify).
