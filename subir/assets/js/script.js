let currentSlide = 1;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.querySelector('.slides2');
    if (n > 3) { currentSlide = 1; }
    if (n < 1) { currentSlide = 3; }
    slides.style.transform = `translateX(${-(currentSlide - 1) * 100}%)`;
}

window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.pageYOffset > 0) {
        console.log('scroll');
        nav.classList.add('bg-scroll');
    } else {
        nav.classList.remove('bg-scroll');
    }
});





// Selecciona el div y el navbar
const div = document.querySelector('.container-fluid div');
const navbar = document.querySelector('.navbar');

// Crea una nueva instancia de MutationObserver
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (div.classList.contains('collapsing') || div.classList.contains('show')) {
        // Si el div tiene la clase 'show', aumenta el padding del navbar
        navbar.style.paddingBottom = '15rem'; // Ajusta este valor a lo que necesites
      } else {
        // Si el div no tiene la clase 'show', restablece el padding del navbar
        navbar.style.paddingBottom = ''; // Ajusta este valor a lo que necesites
      }
    }
  });
});

// Inicia la observación
observer.observe(div, {
  attributes: true, // Observa los cambios de atributos
  attributeFilter: ['class'] // Solo observa los cambios en el atributo 'class'
});



document.addEventListener("DOMContentLoaded", function() {
  let slideRow = document.getElementById('slide-row');
  let slideCols = document.querySelectorAll('.slide-col');
  let currentTestimonial = 0;
  let testimonialWidth = slideCols[0].getBoundingClientRect().width; // Ancho de cada testimonio, incluyendo margen, padding y bordes

  // Actualizar el ancho de los testimonios cuando cambia el tamaño de la ventana
  window.addEventListener('resize', () => {
    testimonialWidth = slideCols[0].getBoundingClientRect().width;
  });
  // Mostrar solo el testimonio actual
  function showCurrentTestimonial() {
      let offset = -testimonialWidth * currentTestimonial;
      slideRow.style.transform = `translateX(${offset}px)`;
  }

  // Cambiar al testimonio siguiente
  function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % slideCols.length;
      showCurrentTestimonial();
  }

  // Cambiar al testimonio anterior
  function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + slideCols.length) % slideCols.length;
      showCurrentTestimonial();
  }

  // Mostrar el primer testimonio al cargar la página
  showCurrentTestimonial();

  // Agregar listeners para los botones de navegación
  document.getElementById('prev-btn').addEventListener('click', prevTestimonial);
  document.getElementById('next-btn').addEventListener('click', nextTestimonial);
});



document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.querySelector('.detalle-img > img');
  const smallImages = document.querySelectorAll('.detalle-masimagenes > img');

  smallImages.forEach(function(img) {
      img.addEventListener('click', function() {
          mainImage.src = img.src;
      });
  });
});