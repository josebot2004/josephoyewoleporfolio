/*========= toggle icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*========= scroll section active link and sticky navbar ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });

  /*========= sticky navbar ==========*/
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};

/*========= scroll reveal ==========*/
ScrollReveal({
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .sercives-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-img', { origin: 'right' });

/*========= typed js ==========*/
const typed = new Typed('.multiple-text', {
  strings: ['frontend Developer', 'Graphics Designer', 'UI&UX Designer'],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});