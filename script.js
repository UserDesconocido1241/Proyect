// Ocultar modal al cargar la página (seguridad extra)
window.onload = function () {
  document.getElementById('modalPago').style.display = 'none';
};

function mostrarPago(nombre, precio = 80) {
  // Título y precio
  document.getElementById('modalTitulo').textContent = nombre;
  document.getElementById('modalPrecio').textContent = `S/. ${precio}`;

  // Mensaje de WhatsApp personalizado
  const textoWhats = encodeURIComponent(`Hola, quiero consultar sobre el polo ${nombre} que cuesta S/. ${precio}.`);
  const numeroWhats = '968710007'; // tu número sin el + ni espacios
  const linkWhats = `https://wa.me/51${numeroWhats}?text=${textoWhats}`;
  document.getElementById('btnWhatsapp').href = linkWhats;

  // Mostrar modal
  document.getElementById('modalPago').style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modalPago').style.display = 'none';
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function (event) {
  const modal = document.getElementById('modalPago');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// musica
window.addEventListener('load', () => {
  const audio = document.getElementById('audioPlayer');
  if (audio) {
    let audioSrc = '';

    if (window.location.pathname.includes('productos.html')) {
      audioSrc = 'music/Pain.mp3';
    } else if (window.location.pathname.includes('personal.html')) {
      audioSrc = 'music/JoshA.mp3';
    }

    if (audioSrc) {
      audio.src = audioSrc;
      audio.volume = 0.1;
      audio.play().catch(e => {
        console.log('Reproducción automática bloqueada:', e);
      });

      // Evitar que el usuario pause el audio
      audio.addEventListener('pause', () => {
        audio.play();
      });
    }
  }
});

