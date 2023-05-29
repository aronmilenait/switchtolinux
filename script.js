//Script to make the content appear while the user scrolls.
function scrollEffect() {
    const li = document.querySelectorAll('.reasons-li');
    li.forEach((li, index) => {
        const top = li.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
            li.style.opacity = '1';
        }
    });
}

scrollEffect();

window.addEventListener('scroll', scrollEffect);

//Slideshow 
const images = document.querySelectorAll('.slideshow-img');
let currentImage = 0;

function showNextImage() {
    images[currentImage].classList.remove('active');
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    images[currentImage].classList.add('active');
}

setInterval(showNextImage, 3000);