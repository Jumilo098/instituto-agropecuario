/* =====================================================================
   INSTITUTO AGROPECUARIO - CONFIGURACION DEL EMBUDO
   ---------------------------------------------------------------------
   ESTE ES EL UNICO ARCHIVO QUE HAY QUE EDITAR ANTES DE PUBLICAR.
   Todo lo que este vacio ("") sale resaltado en amarillo en la pagina
   con el texto "POR DEFINIR", para que no se publique nada a medias.
   ===================================================================== */
window.IA_CONFIG = {

  /* ---- El experto ---- */
  nombre_experto: "",              // ej: "Ing. Carlos Restrepo"
  cargo_experto: "Ingeniero Agricola",
  anos_experiencia: "",            // ej: "14"

  /* ---- El webinar ---- */
  fecha_webinar: "",               // ej: "Jueves 4 de septiembre"
  hora_webinar: "",                // ej: "7:00 p. m. (hora Colombia)"
  duracion_webinar: "90 minutos",
  fecha_iso_webinar: "",           // ej: "2026-09-04T19:00:00-05:00"  (para la cuenta regresiva)
  url_sala: "",                    // enlace de Zoom / YouTube en vivo (se envia por WhatsApp y correo)

  /* ---- WhatsApp ---- */
  wa_grupo_webinar: "",            // https://chat.whatsapp.com/XXXX  (grupo de los registrados)
  wa_grupo_cohorte: "",            // https://chat.whatsapp.com/XXXX  (grupo de la cohorte fundadora)
  wa_soporte: "",                  // https://wa.me/57XXXXXXXXXX     (soporte 1 a 1)

  /* ---- La oferta ---- */
  url_checkout: "",                // enlace de pago (Stripe / Hotmart / Bold)
  precio: "37",
  moneda: "USD",
  precio_cop: "",                  // ej: "150.000" (referencia informativa)
  precio_regular: "197",
  cupos_cohorte: "50",
  fecha_inicio_cohorte: "",        // ej: "Lunes 15 de septiembre"

  /* ---- Legal / marca ---- */
  marca: "Instituto Agropecuario",
  dominio: "institutoagropecuario.com",
  correo_soporte: "",              // ej: "hola@institutoagropecuario.com"
  url_privacidad: "/legal/privacidad.html",
  url_terminos: "/legal/terminos.html"
};
