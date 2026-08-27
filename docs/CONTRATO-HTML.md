# CONTRATO TÉCNICO — cómo se escribe cada página

Todas las páginas son **HTML estático puro**, sin build, sin frameworks, sin CDN de terceros
(salvo Google Fonts). Se despliegan tal cual en Cloudflare Pages con directorio de salida `public/`.

## 1. Bloque `<head>` obligatorio (copiar literal, cambiando solo title/description/OG y la profundidad de las rutas)

```html
<!DOCTYPE html>
<html lang="es-CO">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>TITULO DE LA PAGINA | Instituto Agropecuario</title>
<meta name="description" content="DESCRIPCION DE 150 CARACTERES">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
<meta property="og:title" content="TITULO">
<meta property="og:description" content="DESCRIPCION">
<meta property="og:site_name" content="Instituto Agropecuario">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%90%94%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@600&family=Source+Sans+3:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
```

Al final de `<body>`, siempre y en este orden:

```html
<script src="/assets/config.js"></script>
<script src="/assets/funnel.js"></script>
</body>
</html>
```

> Las rutas van **absolutas desde la raíz** (`/assets/...`, `/oferta/`, `/gracias/`) porque hay
> subcarpetas. Nunca rutas relativas tipo `../assets/`.

## 2. Cabecera y pie (idénticos en las cuatro páginas)

```html
<header class="topbar bg-crema">
  <a class="logo" href="/">Instituto <span>Agropecuario</span></a>
</header>
```

```html
<footer class="footer">
  <div class="wrap">
    <p><strong>Instituto Agropecuario</strong> &mdash; Formación práctica para producir y vender en el campo colombiano.</p>
    <p><a href="/legal/privacidad.html">Política de privacidad</a> &nbsp;·&nbsp; <a href="/legal/terminos.html">Términos y condiciones</a> &nbsp;·&nbsp; <a data-cfg-mailto href="#">escríbenos</a></p>
    <p class="legal">Este contenido es formación agropecuaria y de gestión. No sustituye asesoría veterinaria, sanitaria, contable ni financiera profesional. Los resultados de cualquier proyecto productivo dependen del trabajo, las condiciones y las decisiones de cada persona. Este sitio no está afiliado a Meta, Facebook, Instagram, Google ni YouTube.</p>
    <p class="legal">&copy; 2026 Instituto Agropecuario. Todos los derechos reservados.</p>
  </div>
</footer>
```

## 3. Datos configurables — NUNCA escribir a mano un dato pendiente

Todo dato variable se marca con atributos que `funnel.js` rellena desde `assets/config.js`:

| Uso | Cómo se escribe |
|---|---|
| Texto | `<span data-cfg="nombre_experto"></span>` |
| Enlace | `<a class="btn" data-cfg-href="url_checkout" href="#">QUIERO ENTRAR</a>` |
| Cuenta regresiva | `<div class="contador" data-cfg-cuenta="fecha_iso_webinar"></div>` |
| Correo de soporte | `<a data-cfg-mailto href="#">escríbenos</a>` |

Claves disponibles en `config.js`: `nombre_experto`, `cargo_experto`, `anos_experiencia`,
`fecha_webinar`, `hora_webinar`, `duracion_webinar`, `fecha_iso_webinar`, `url_sala`,
`wa_grupo_webinar`, `wa_grupo_cohorte`, `wa_soporte`, `url_checkout`, `precio`, `moneda`,
`precio_cop`, `precio_regular`, `cupos_cohorte`, `fecha_inicio_cohorte`, `marca`, `dominio`,
`correo_soporte`.

Si un dato NO tiene clave en config (ej. un testimonio real pendiente), se escribe así:
`<span class="dato-pendiente">TESTIMONIO REAL PENDIENTE</span>`

## 4. Clases del sistema de diseño (`assets/styles.css`) — usar SOLO estas

**Layout:** `.wrap` `.wrap-texto` `.sec` `.sec-sm` `.sec-lg` `.centro` `.max-720` `.max-820`
`.mt-s` `.mt-m` `.mt-l`
**Fondos:** `.bg-verde` `.bg-crema` `.bg-crema2` `.bg-blanco` `.bg-yema` `.bg-tierra` `.textura`
(alternar fondos entre secciones consecutivas: nunca dos secciones seguidas del mismo color)
**Texto:** `.pretitular` (píldora amarilla) `.pretitular-linea` (línea roja) `.subtitular`
`.kicker` `.grande` `.chico` `.mini` `.destacado` (resaltador amarillo) `.subrayado` `.rojo` `.verde`
**Avisos:** `.barra-aviso` (barra roja arriba del todo) `.aviso` (caja roja) `.nota` (caja verde)
**Botones:** `.btn` `.btn-lg` `.btn-verde` `.btn-wa` `.btn-sub` (línea bajo el botón) `.cta-bloque`
**Listas:** `.bullets` `.bullets-x` (cruces rojas) `.bullets-2col` `.pasos` (numerados)
**Bloques:** `.card` `.card-yema` `.card-verde` `.card-borde-rojo` `.grid` `.grid-2` `.grid-3` `.grid-4`
**Oferta:** `.modulo` (+ `.letra` dentro) `.bono` `.valor` (tabla, con `tr.total` y `.tachado`)
`.precio-caja` `.precio-antes` `.precio` `.precio-nota` `.garantia` (+ `.sello`)
**Autoridad:** `.about` (+ `.foto`, `.credenciales`) `.testimonio` (+ `.autor`, `.inicial`) `.estrellas`
**Otros:** `.faq` (`<details>`/`<summary>` + `div.respuesta`) `.form-caja` `.campo` `.form-legal`
`.form-error` `.contador` `.sticky-cta` `.divisor` `.divisor-huevo` `.comparativa` (`.malo`/`.bueno`)
`.numeros` (+ `.n`, `.t`) `.ps` `.firma` `.footer` `.topbar` `.logo` `.solo-movil` `.no-movil`

**No escribir CSS nuevo dentro de las páginas.** Si algo no se puede componer con estas clases,
usar un `style=""` mínimo e inline, y avisarlo en el reporte final.

## 5. Formulario de registro (solo en la landing)

```html
<form class="form-caja" data-form-registro data-destino="/gracias/">
  <h3>Reserva tu cupo gratis</h3>
  <p class="chico centro">Te llega el enlace por correo y por WhatsApp.</p>
  <div class="campo"><label for="nombre">Tu nombre</label><input id="nombre" name="nombre" type="text" autocomplete="given-name" required></div>
  <div class="campo"><label for="correo">Tu correo</label><input id="correo" name="correo" type="email" autocomplete="email" required></div>
  <div class="campo"><label for="whatsapp">Tu WhatsApp (con indicativo)</label><input id="whatsapp" name="whatsapp" type="tel" inputmode="tel" placeholder="+57 300 000 0000" autocomplete="tel" required></div>
  <div class="campo"><label for="momento">¿En qué momento estás?</label>
    <select id="momento" name="momento" required>
      <option value="">Elige una opción</option>
      <option value="cero">Quiero empezar desde cero</option>
      <option value="ciegas">Ya tengo gallinas pero no sé si gano</option>
      <option value="escalar">Ya me deja y quiero producir mejor</option>
    </select>
  </div>
  <button type="submit" class="btn btn-lg">QUIERO MI CUPO GRATIS</button>
  <p class="form-error"></p>
  <p class="form-legal">Cupos limitados. Te enviaremos el enlace y recordatorios del evento. Puedes darte de baja cuando quieras.</p>
</form>
```

El JS ya valida, guarda UTMs y redirige a `/gracias/?nombre=...`. No tocar esa lógica.

## 6. Personalización con el nombre del lead

En `/gracias/` y `/bienvenida/` se puede saludar por nombre así:
`<span data-lead="nombre">amigo</span>` — el JS lo reemplaza si hay nombre en la URL o en localStorage.

## 7. Accesibilidad y calidad

- Un solo `<h1>` por página.
- Jerarquía `h2` > `h3` sin saltos.
- Botones con texto en mayúsculas, verbo en primera persona ("QUIERO...", "SÍ, ...").
- Contraste: sobre `.bg-verde` el texto va claro; nunca texto verde sobre verde.
- Móvil primero: todo debe leerse bien a 360 px de ancho.
- Emojis: con moderación, solo como viñeta decorativa (🐔 🥚 🌾 ✅ ⚠️). Nunca dentro de un `<h1>`.
