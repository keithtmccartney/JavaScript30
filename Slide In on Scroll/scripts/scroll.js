var sliderImages;

function init() {
    sliderImages = document.querySelectorAll('.slide-in');
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;

    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;

            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

// const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    console.log(e);
    console.count(e);

    sliderImages.forEach(sliderImage => {
        // half way through the image (get the animation on at-least 50% exposure of the image height)
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // window.innerHeight is equal to pixel height for position at bottom of page

        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height; // offsetTop is an indication to how far from the top of page the image is located
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

// window.addEventListener('scroll', checkSlide);

window.addEventListener('scroll', debounce(checkSlide));