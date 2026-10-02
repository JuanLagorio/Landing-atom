// Comportamiento de las dos páginas. Los datos editables están en config.js.
(() => {
  const config = window.ATOM_CONFIG || {};

  function leer(clave) {
    try { return sessionStorage.getItem(clave) || ""; } catch { return ""; }
  }

  function guardar(clave, valor) {
    try { sessionStorage.setItem(clave, valor); } catch {}
  }

  // Titular con el tema de la clase
  if (config.titulo) {
    document.querySelectorAll("[data-titulo]").forEach((el) => { el.textContent = config.titulo; });
    document.title = `${config.titulo} | Atom`;
  }

  // Fecha y cuenta regresiva hasta el inicio real de la clase
  const inicio = config.fecha ? new Date(config.fecha) : null;
  const cuando = document.querySelector(".cuando");
  if (cuando && inicio && !isNaN(inicio)) {
    const dia = new Intl.DateTimeFormat("es-AR", { weekday: "long", day: "numeric", month: "long" }).format(inicio);
    const hora = new Intl.DateTimeFormat("es-AR", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(inicio);
    cuando.querySelector("[data-fecha]").textContent = `${dia.charAt(0).toUpperCase()}${dia.slice(1)} · ${hora} hs`;
    cuando.hidden = false;

    const cuenta = cuando.querySelector("[data-cuenta]");
    const dos = (n) => String(n).padStart(2, "0");
    const actualizar = () => {
      const falta = Math.floor((inicio - Date.now()) / 1000);
      if (falta <= 0) {
        cuenta.hidden = true;
        clearInterval(reloj);
        return;
      }
      const d = Math.floor(falta / 86400);
      const h = Math.floor((falta % 86400) / 3600);
      const m = Math.floor((falta % 3600) / 60);
      cuenta.textContent = `Empieza en ${d ? `${d}d ` : ""}${dos(h)}h ${dos(m)}m ${dos(falta % 60)}s`;
    };
    const reloj = setInterval(actualizar, 1000);
    actualizar();
  }

  // Paso 1: formulario
  const form = document.getElementById("registro");
  if (form) {
    const campos = {
      nombre: {
        valido: (v) => v.trim().length >= 2,
        mensaje: "Escribí tu nombre.",
      },
      email: {
        valido: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
        mensaje: "Revisá tu email, parece que falta algo.",
      },
      telefono: {
        valido: (v) => {
          const digitos = v.replace(/\D/g, "").length;
          return digitos >= 8 && digitos <= 15;
        },
        mensaje: "Escribí tu WhatsApp con código de área.",
      },
    };
    const boton = form.querySelector("button[type=submit]");
    const textoBoton = boton.querySelector("span");
    const textoOriginal = textoBoton.textContent;

    function marcar(nombre, ok) {
      form.elements[nombre].setAttribute("aria-invalid", ok ? "false" : "true");
      document.getElementById(`error-${nombre}`).textContent = ok ? "" : campos[nombre].mensaje;
    }

    // Una vez marcado un error, se borra apenas el dato queda bien
    Object.keys(campos).forEach((nombre) => {
      const input = form.elements[nombre];
      input.addEventListener("input", () => {
        if (input.getAttribute("aria-invalid") === "true") marcar(nombre, campos[nombre].valido(input.value));
      });
    });

    // Errores de tipeo comunes en el dominio del email
    const DOMINIOS = {
      "gmial.com": "gmail.com", "gmai.com": "gmail.com", "gmal.com": "gmail.com", "gamil.com": "gmail.com",
      "gnail.com": "gmail.com", "gmail.co": "gmail.com", "gmail.con": "gmail.com", "gmail.cm": "gmail.com",
      "gmail.om": "gmail.com", "gmail.comm": "gmail.com", "gmaill.com": "gmail.com",
      "hotmial.com": "hotmail.com", "hotmal.com": "hotmail.com", "hotmail.con": "hotmail.com", "hotmail.co": "hotmail.com",
      "outlok.com": "outlook.com", "outlook.con": "outlook.com", "yahoo.con": "yahoo.com", "yaho.com": "yahoo.com",
    };
    const email = form.elements.email;
    const sugerencia = document.getElementById("sugerencia-email");
    email.addEventListener("blur", () => {
      const [usuario, dominio = ""] = email.value.trim().toLowerCase().split("@");
      const corregido = DOMINIOS[dominio];
      sugerencia.hidden = !corregido;
      if (corregido) {
        sugerencia.dataset.email = `${usuario}@${corregido}`;
        sugerencia.textContent = `¿Quisiste decir ${usuario}@${corregido}?`;
      }
    });
    sugerencia.addEventListener("click", () => {
      email.value = sugerencia.dataset.email;
      sugerencia.hidden = true;
      marcar("email", true);
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const invalidos = Object.keys(campos).filter((nombre) => {
        const ok = campos[nombre].valido(form.elements[nombre].value);
        marcar(nombre, ok);
        return !ok;
      });
      if (invalidos.length) {
        form.elements[invalidos[0]].focus();
        return;
      }

      boton.disabled = true;
      textoBoton.textContent = "Reservando tu cupo…";

      const datos = new URLSearchParams();
      Object.keys(campos).forEach((nombre) => datos.set(nombre, form.elements[nombre].value.trim()));
      const parametros = new URLSearchParams(location.search);
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((clave) => {
        datos.set(clave, parametros.get(clave) || "");
      });
      guardar("nombre", datos.get("nombre"));

      // keepalive deja terminar el envío aunque ya hayamos pasado al paso 2
      if (config.formularioUrl) {
        const envio = fetch(config.formularioUrl, { method: "POST", mode: "no-cors", keepalive: true, body: datos }).catch(() => {});
        await Promise.race([envio, new Promise((listo) => setTimeout(listo, 3000))]);
      }
      location.href = "gracias.html";
    });

    // Si vuelve con el botón Atrás, el botón tiene que estar usable de nuevo
    window.addEventListener("pageshow", () => {
      boton.disabled = false;
      textoBoton.textContent = textoOriginal;
    });
  }

  // Paso 2: saludo, grupo de WhatsApp y video
  const saludo = document.querySelector("[data-saludo]");
  const nombre = leer("nombre").split(/\s+/)[0];
  if (saludo && nombre) {
    saludo.textContent = `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}, falta un último paso`;
  }

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    if (config.whatsappUrl) {
      link.href = config.whatsappUrl;
      return;
    }
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById(link.dataset.estado).textContent =
        "Todavía no cargamos el enlace del grupo. Escribinos por Instagram y te lo pasamos.";
    });
  });

  const video = document.querySelector("[data-video]");
  if (video && config.videoUrl) {
    const url = config.videoUrl.trim();
    const youtube = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    let reproductor;
    if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) {
      reproductor = document.createElement("video");
      Object.assign(reproductor, { src: url, controls: true, playsInline: true, preload: "metadata" });
    } else {
      reproductor = document.createElement("iframe");
      reproductor.src = youtube ? `https://www.youtube-nocookie.com/embed/${youtube[1]}?rel=0&playsinline=1` : url;
      reproductor.title = "Video explicativo";
      reproductor.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
      reproductor.allowFullscreen = true;
    }
    video.replaceChildren(reproductor);
    video.classList.remove("video-vacio");
  }
  if (video && config.videoVertical) video.classList.add("vertical");
})();
