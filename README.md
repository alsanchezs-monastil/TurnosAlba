# Turnos Alba - Gestión

Aplicación web para la gestión de cuadrantes de enfermería con porcentaje de jornada configurable (por defecto **75% Alba / 25% Lucía**, editable en cualquier momento desde **Ajustes**), preparada para desplegar en **GitHub + Netlify** con sincronización automática entre dispositivos mediante **Netlify Blobs**.

## Características principales

- **Calendario interactivo con gestos:**
  - Navegación deslizando el dedo hacia izquierda/derecha (o con flechas).
  - Relleno automático del patrón habitual: **Lunes, Miércoles, Jueves y Viernes de Mañana (`A.M.`)** y **Martes de Tarde (`A.T.`)**.
  - Paleta de pinceles rápidos debajo del calendario: `A.M.`, `A.T.`, `L.M.`, `L.T.`, `F.` (Festivo), `V.` (Vacaciones), `LD` (Libre Disposición), `C.V.` (Cierre · Vacaciones con franjas) y `C.LD` (Cierre · LD con franjas).
  - Resumen mensual completo al pie del calendario con porcentaje efectivo frente al objetivo configurado, desviación exacta en turnos y desglose de horas.
- **Recuento Anual y Mensual:**
  - Alternancia entre **Visión Anual** (con tabla de los 12 meses y fila de **Total anual**) y **Visión Mensual**.
  - Seguimiento de **Vacaciones** y **LD** clasificados automáticamente en **Disfrutados**, **Previstos** y **Pendientes**, con desplegable de fechas exactas.
- **Sincronización en la nube (Netlify Blobs) y PIN:**
  - Sincronización automática entre dispositivos sin necesidad de configurar bases de datos externas.
  - Pantalla de bloqueo por **PIN de 4 dígitos** (`1234` por defecto, editable en Ajustes o mediante la variable de entorno `APP_PIN` en Netlify).

## Cómo desplegar en GitHub y Netlify

1. Crea un repositorio nuevo en **GitHub** (puede ser privado) y sube todos los archivos de esta carpeta respetando la estructura (`index.html`, `netlify.toml`, `package.json`, `netlify/functions/state.mjs`).
2. Entra en [Netlify](https://app.netlify.com/), pulsa **Add new site → Import an existing project** y selecciona tu repositorio de GitHub.
3. Netlify detectará automáticamente `netlify.toml` e instalará `@netlify/blobs`. Pulsa **Deploy site**.
4. *(Opcional)* Si quieres validar el PIN también en el servidor, ve a **Site configuration → Environment variables** en Netlify y añade `APP_PIN` con tu código de 4 dígitos.
