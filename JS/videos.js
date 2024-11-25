document.addEventListener('DOMContentLoaded', function() {
  const articles = document.querySelectorAll('.article, .featured-article');

  articles.forEach(article => {
      article.addEventListener('click', function() {
          // Aquí puedes cambiar la URL a la que quieres que se dirija el usuario
          // Por ahora, usaremos una URL de ejemplo
          window.location.href = 'https://ejemplo.com/noticia';
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const videoItems = document.querySelectorAll('.vp-video-item');
  const mainVideo = document.querySelector('.vp-main-video');
  const mainVideoTitle = document.querySelector('.vp-video-player h2');
  const mainVideoContainer = document.querySelector('.vp-video-container');

  videoItems.forEach(item => {
      item.addEventListener('click', function() {
          const videoUrl = this.getAttribute('data-url');
          window.location.href = videoUrl;
      });
  });

  mainVideoContainer.addEventListener('click', function() {
      const mainVideoUrl = videoItems[0].getAttribute('data-url');
      window.location.href = mainVideoUrl;
  });

  // Simulación de controles de reproducción
  const progressBar = document.querySelector('.vp-progress');
  const timeDisplay = document.querySelector('.vp-time-display');

  function updateProgress() {
      const progress = (Math.random() * 100).toFixed(2);
      progressBar.style.width = `${progress}%`;

      const currentTime = Math.floor(progress * 0.43 / 100);
      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;
      timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / 00:43`;
  }

  setInterval(updateProgress, 1000);
});






