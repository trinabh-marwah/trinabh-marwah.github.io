function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
  
    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);