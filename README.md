# Embudo agropecuario — construido en vivo en la sesión 86 de embudos.ai

Este repositorio es un **embudo de ventas completo y funcionando**, construido en directo durante la
sesión 86 de [embudos.ai](https://www.embudos.ai) el 27 de agosto de 2026, y rediseñado después con
la metodología que se explicó en esa misma sesión.

Es un **regalo para Edward** y para todos los compañeros de la membresía: no tienes que empezar
desde cero. Clónalo, ábrelo con Claude Code y sigue desde donde quedó.

> **Nicho del caso:** producción agropecuaria en Colombia — fincas de 1 a 12 hectáreas.
> **Puedes cambiarle el nicho entero** y quedarte con la estructura: es lo que vale.

---

## Cómo retomarlo en tu propia terminal

```bash
git clone https://github.com/Jumilo098/instituto-agropecuario.git
cd instituto-agropecuario
claude
```

Y dile a Claude algo como:

> *Lee `docs/BRIEF-V2-REDISENO.md` y `docs/CONTRATO-HTML.md` para entender cómo está construido este
> embudo. Luego adáptalo a mi nicho, que es ____, y a mi cliente ideal, que es ____.*

Para verlo en tu computador antes de tocar nada:

```bash
cd public
python -m http.server 8080     # y abre http://localhost:8080
```

(Hay que servirlo por HTTP; abrir el archivo con doble clic no funciona, las rutas son absolutas.)

---

## Qué hay dentro

```
public/
  index.html              Landing de registro al webinar
  gracias/index.html      Confirmación + "te falta un paso" → grupo de WhatsApp
  oferta/index.html       Carta de ventas larga
  bienvenida/index.html   Confirmación de pago → grupo de la cohorte
  legal/                  Privacidad (Ley 1581) y términos — plantillas base
  assets/
    styles.css            Sistema de diseño completo (verde campo + amarillo yema)
    config.js             ← EL ÚNICO ARCHIVO QUE TIENES QUE EDITAR
    funnel.js             UTMs, cuenta regresiva, CTA pegajoso, formulario
docs/
  BRIEF-V2-REDISENO.md    La metodología aplicada. LÉELO PRIMERO.
  BRIEF.md                El brief de la primera versión (histórico)
  CONTRATO-HTML.md        Cómo está maquetado, para que Claude no rompa nada
  PUESTA-EN-MARCHA.md     Checklist paso a paso
sesion-86/
  transcripcion-sesion-86.txt   La sesión completa (versión pública)
  LA-GUIA.md                    Qué trae la guía-protocolo en PDF y cómo pedirla
```

Es **HTML estático puro**: sin build, sin framework, sin dependencias. Se despliega tal cual en
Cloudflare Pages (directorio de salida `public`), en Vercel, en Netlify o donde quieras.

---

## ⚠️ Empieza por aquí: `public/assets/config.js`

Todos los datos variables del embudo están en ese único archivo: tu nombre, la fecha del webinar,
los enlaces de WhatsApp, el enlace de pago, el precio.

**Lo que dejes vacío sale resaltado en amarillo con el texto "POR DEFINIR"**, y los botones sin
enlace salen marcados en rojo con "CONFIGURA EL ENLACE". Es a propósito: así no publicas nada a
medias sin darte cuenta.

Y busca los marcadores de lo que no se podía inventar:

```bash
grep -rn "dato-pendiente" public/
```

Ahí están los testimonios (vacíos a propósito: **no pongas testimonios que no sean reales**), tu
foto y tus credenciales.

---

## Tareas pendientes que quedaron

### 1. Conectar la página de registro con GoHighLevel

Hoy el formulario **no manda el lead a ningún lado**: valida, lo guarda en el navegador y redirige a
la página de gracias. Antes de invertir un peso en publicidad hay que conectarlo.

> **Edward: tienes GoHighLevel incluido en tu membresía de embudos.ai.** Solo tienes que pedírselo a
> Juan Camilo. Y esto va para todos los compañeros: está incluido, es cuestión de pedirlo.

Cuando lo tengas, añade el endpoint antes de cargar `funnel.js` en `public/index.html`:

```html
<script>window.IA_ENDPOINT_REGISTRO = "https://tu-webhook-de-ghl";</script>
```

Recibirá un JSON con `nombre`, `whatsapp`, `correo` (opcional), `hectareas`, `momento` y **todos los
UTMs** capturados. Los UTMs ya se propagan solos por todo el embudo, así que vas a saber de qué
anuncio vino cada venta.

### 2. Conectar la carta de ventas con un procesador de pago

La carta ya tiene los botones listos; solo falta pegar el enlace de pago en `url_checkout`.

Se puede con **Stripe** o **PayPal**, pero:

> **Edward: como estás arrancando desde cero y en Colombia, usa Hotmart.** Para la etapa inicial es
> el camino corto — te resuelve el cobro local sin tener que montar una empresa ni pelear con
> pasarelas. Más adelante, cuando el volumen lo justifique, se migra.

Acuérdate de configurar la **URL de éxito del checkout** apuntando a `/bienvenida/`, que es la página
que ya está hecha para recibir al comprador y meterlo al grupo de la cohorte.

### 3. Los dos grupos de WhatsApp

Son **dos grupos distintos**, no uno:

- `wa_grupo_webinar` — los registrados al webinar (masivo, se avisa el enlace de la sala)
- `wa_grupo_cohorte` — solo los que compraron (grupo de trabajo, es parte de lo que pagaron)

WhatsApp es el canal central de este embudo, no el correo. Esa fue una decisión de diseño explícita
en la sesión: el público tiene menor alfabetización digital y un segmento importante pasa de los 55
años. Por eso en el formulario el WhatsApp es obligatorio y el correo es opcional.

### 4. Lo que falta de contenido

- Fecha y hora reales del webinar (y `fecha_iso_webinar` para que funcione la cuenta regresiva)
- Tu foto en campo
- Tus credenciales verificables
- Testimonios reales — **cuando los tengas**, no antes
- Que un abogado revise las dos páginas legales antes de publicarlas

Todo está en `docs/PUESTA-EN-MARCHA.md`.

---

## Lo que de verdad tienes que llevarte de aquí

El HTML es lo de menos. Lo que vale está en `docs/BRIEF-V2-REDISENO.md`:

1. **Los cinco niveles de consciencia.** La primera versión de este embudo le hablaba a alguien que
   *ya sabía* que quería gallinas ponedoras. Ese público existe, pero es la punta de la pirámide. El
   rediseño le habla a quien siente el dolor pero **no sabe cómo se llama su problema**. Ahí está el
   mercado.
2. **Ponerle nombre al problema.** El copy no vende un producto: le da al lector un nombre para algo
   que ya le pasaba y que no sabía nombrar. Aquí ese nombre es *"la finca de un solo renglón"*.
3. **Hablar en su idioma.** Nada de macroeconomía, nada de culpar al dólar ni al gobierno. Eso
   explica el dolor sin dar poder para resolverlo.
4. **Optimizar para la relación, no solo para la conversión.** Quien no compra tiene que irse con
   algo real. La gente no deja de comprar por objeción, sino por condición — y la condición cambia
   con el tiempo.
5. **Lo que la IA no puede hacer por ti.** La IA monta esto en 45 minutos. Lo que no puede es tener
   tu acento, contestar el teléfono, traducirle a alguien lo que necesita entender, ni jugarse tu
   nombre. Eso es tuyo, y es lo que sostiene el negocio.

La sesión completa está en `sesion-86/`. La guía-protocolo en PDF de 16 páginas no se publica aquí — mira `sesion-86/LA-GUIA.md` para saber qué trae y cómo pedirla.

---

## Nota sobre la transcripción

La transcripción incluida es la **versión pública** de la sesión. Se han retirado los datos que
identifican a compañeros y terceros (apellidos, ciudades, empleadores, dominios personales) y las
cifras absolutas del negocio de Juan Camilo.

Se conserva íntegro todo lo que da valor al documento: la metodología completa, los marcos
conceptuales, los prompts y el caso de estudio.

Los números del ejercicio agropecuario (CPL, CAC, churn, MRR, tamaño de mercado) son **estimaciones
generadas en vivo para un nicho hipotético**. No son resultados reales de nadie, y no deben citarse
como tales.

---

## Licencia y uso

Material didáctico de [embudos.ai](https://www.embudos.ai). Úsalo, adáptalo y móntale tu negocio
encima. Lo único que se pide es que no lo revendas como si fuera tuyo, y que si te sirve, lo cuentes.

Este embudo es una **plantilla**: no promete resultados, y el copy que trae dentro está escrito
deliberadamente sin promesas de ingresos. Si lo adaptas, mantén ese criterio — además de ser lo
correcto, es lo que exige la política de anuncios de Meta en este vertical.
