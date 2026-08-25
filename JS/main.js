const projectImages = document.querySelectorAll('.project-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

projectImages.forEach((image) => {
  image.addEventListener('click', () => {

    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});



const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const sunSvg = `<svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">light-mode-line</title><g fill="none"><g clip-path="url(#SVGHcSWxdhd)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 12H1m22 0h-4M7.05 7.05L4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0l-2.828 2.828M19.778 4.222L16.95 7.05M12 19v4m0-22v4m4 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0"/></g><defs><clipPath id="SVGHcSWxdhd"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>`;
const moonSvg = `<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">dark-mode-outline</title><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"/></svg>`;


themeToggleBtn.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  
  if (currentTheme === 'light') {
   rootElement.removeAttribute('data-theme');
   themeToggleBtn.innerHTML = sunSvg;
   themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode')
  }
  else {
    rootElement.setAttribute('data-theme', 'light')
    themeToggleBtn.innerHTML = moonSvg;
    themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
  }
  
});

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
document.body.style.setProperty('--header-height', headerHeight + 'px');




const hamContent = document.querySelector('.nav-links');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  
  if (hamContent.classList.contains('open')) {
    hamburger.classList.remove('abracadabra');
    hamContent.classList.remove('open');
    hamContent.classList.add('closing');
    document.body.classList.remove('no-scroll');
    
    setTimeout(() => {
      hamContent.classList.remove('closing');
    }, 300);
    
  }
  
  else {
    hamburger.classList.add('abracadabra');
    hamContent.classList.add('open');
    document.body.classList.add('no-scroll');
  }
  
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('abracadabra');
    hamContent.classList.remove('open');
    hamContent.classList.add('closing');
    document.body.classList.remove('no-scroll');
    
    setTimeout(() => {
      hamContent.classList.remove('closing');
    }, 300);
    
  });
});