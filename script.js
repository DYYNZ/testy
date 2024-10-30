// Javascript
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset;
  
    // Sticky Header
    var header = document.querySelector('.header');
    if (scrollTop > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  
    // Fade-In Animation
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
      var elementTop = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight) {
        element.classList.add('show');
      } 
    });
  });
  
  // Transisi untuk tombol PRODUK
  const produkButton = document.querySelector(".produk-button");
  
  produkButton.addEventListener("click", () => {
    produkButton.style.opacity = "0.5"; 
  
    setTimeout(() => {
      window.location.href = "shop.html"; 
    }, 300); 
  });

  // Intersection Observer untuk animasi scroll
  const animateOnScroll = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Opsional: hentikan observasi setelah animasi
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe semua elemen dengan class animate-*
    const animatedElements = document.querySelectorAll([
      '.animate-fade-up',
      '.animate-fade-left',
      '.animate-fade-right',
      '.animate-zoom',
      '.animate-rotate',
      '.animate-blur',
      '.stagger-list'
    ].join(','));

    animatedElements.forEach(el => observer.observe(el));
  };

  // Inisialisasi animasi
  document.addEventListener('DOMContentLoaded', animateOnScroll);

  // Smooth Scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  