import Vimeo from '@vimeo/player';

const vimeoPlayer = new Vimeo(document.getElementById('vimeo-player'));


vimeoPlayer.on('timeupdate', function(event) {
    // Aquí puedes obtener el tiempo de reproducción actual
    const currentTime = event.seconds;
    // Ahora, guarda este tiempo en el almacenamiento local
    localStorage.setItem('videoplayer-current-time', currentTime);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
      // Configura el reproductor para continuar desde el tiempo guardado
      vimeoPlayer.setCurrentTime(savedTime);
    }
  });

  import throttle from 'lodash/throttle';

vimeoPlayer.on('timeupdate', throttle(function(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000)); // 1000 milisegundos = 1 segundo



  