# Checklist de puesta en marcha

Orden recomendado. Nada de esto lo puede hacer el código: son datos y cuentas.

## 1. Datos del experto y del evento — `public/assets/config.js`

- [ ] `nombre_experto` · `cargo_experto` · `anos_experiencia`
- [ ] `fecha_webinar` (texto: "Jueves 4 de septiembre")
- [ ] `hora_webinar` (texto: "7:00 p. m., hora Colombia")
- [ ] `fecha_iso_webinar` (formato exacto: `2026-09-04T19:00:00-05:00`) → alimenta la cuenta regresiva
- [ ] `url_sala` (Zoom / YouTube en vivo)
- [ ] `fecha_inicio_cohorte` (texto: "Lunes 15 de septiembre")
- [ ] `correo_soporte`

## 2. WhatsApp — dos grupos distintos

- [ ] Grupo **de registrados al webinar** → `wa_grupo_webinar`
- [ ] Grupo **de la Cohorte Fundadora** (solo compradores) → `wa_grupo_cohorte`
- [ ] Número de soporte 1 a 1 → `wa_soporte` (formato `https://wa.me/57XXXXXXXXXX`)

> No uses el mismo grupo para los dos. El de registrados es masivo y ruidoso; el de la cohorte es
> de trabajo y es parte de lo que la gente pagó.

## 3. Pago

- [ ] Crear el producto de 37 USD y pegar el enlace en `url_checkout`
- [ ] Configurar la **URL de éxito del checkout** apuntando a `https://TUDOMINIO/bienvenida/`
- [ ] Rellenar `precio_cop` con la referencia en pesos del día
- [ ] Verificar que el reembolso de 14 días de la garantía se puede ejecutar en esa pasarela

## 4. Contenido que falta y no se podía inventar

Búscalo con `grep -rn "dato-pendiente" public/`

- [ ] Foto del experto en el galpón (landing y página de gracias)
- [ ] Credenciales verificables del experto (titulación, años, productores asesorados)
- [ ] Testimonios reales — hay 6 huecos maquetados (3 en la landing, 3 en la carta). Uno por
      segmento del ICP: el que arrancó de cero, el que iba a ciegas, el que ya era rentable.
      **No los llenes hasta tener testimonios de verdad de la primera cohorte.**
- [ ] Datos de la empresa en `legal/privacidad.html` y `legal/terminos.html` (razón social, NIT,
      dirección, responsable del tratamiento) — y que los revise un abogado antes de publicar.

## 5. Captura de leads

Hoy el formulario valida, guarda en `localStorage` y redirige. **No manda el lead a ningún lado.**
Hay que conectarlo antes de gastar un peso en anuncios. Ver el final del README.

- [ ] Definir dónde viven los leads (Kit / GHL / Resend / Worker + D1)
- [ ] Añadir `window.IA_ENDPOINT_REGISTRO` antes de `funnel.js` en `public/index.html`
- [ ] Probar un registro real de punta a punta y comprobar que llega
- [ ] Configurar el correo automático de confirmación con el enlace de la sala

## 6. Medición

- [ ] Pixel de Meta + evento `Lead` en `/gracias/` y `Purchase` en `/bienvenida/`
- [ ] Los UTMs ya se capturan y se propagan solos por todo el embudo (`funnel.js`), y viajan en el
      payload del formulario. Solo hay que leerlos donde caiga el lead.
- [ ] Los anuncios deben apuntar a `/` con UTMs completos (ver bitácora de campañas de Meta).

## 7. Antes de publicar

- [ ] Revisar las 4 páginas en móvil real (360 px)
- [ ] `grep -rn "dato-pendiente\|POR DEFINIR" public/` → que no quede ninguno vivo
- [ ] Abrir la consola del navegador en cada página: cero errores
- [ ] Comprobar que ningún botón sale con la etiqueta roja "CONFIGURA EL ENLACE"
