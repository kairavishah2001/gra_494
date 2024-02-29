let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .image-container .image').src = src;
    }
});

let slides = document.querySelectorAll('.book .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
function openLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'block';
    
    // Center the lightbox on the page
    lightbox.style.top = '50%';
    lightbox.style.left = '50%';
    lightbox.style.transform = 'translate(-50%, -50%)';
  
    // Pause video if it's already playing
    var iframe = document.getElementById('video-embed');
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }