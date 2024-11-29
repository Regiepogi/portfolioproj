// Smooth scroll for links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade-in animation on scroll
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, options);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  // Mobile Menu Toggle
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('#nav-links');
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Form Submission Success Message
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    document.getElementById('success-message').style.display = 'block';
  });
  