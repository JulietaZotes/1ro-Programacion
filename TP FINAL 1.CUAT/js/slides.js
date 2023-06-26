// Obtén todas las imágenes dentro del contenedor de la presentación
const slideshow = document.querySelector('.slideshow');
const images = slideshow.getElementsByTagName('img');
let currentIndex = 0;

// Oculta todas las imágenes excepto la primera
for (let i = 1; i < images.length; i++) {
  images[i].style.opacity = 0;
}

// Cambia la imagen que se muestra cada 3 segundos
setInterval(() => {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
}, 4000);