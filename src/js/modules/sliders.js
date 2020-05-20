const sliders = (slides, dir, prev, next) => {
    'use strict';

    let slideIndex = 1;

    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        items[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelectorAll(prev);
        const nextBtn = document.querySelectorAll(next);

        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
        });
        nextBtn.addEventListener('click', () => {
            plusSlide(1);
        });
    } catch (e) {}
};

export default sliders;