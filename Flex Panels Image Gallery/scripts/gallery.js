function init() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}

function toggleOpen(e) {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);

    // if(e.propertyName === 'flex-grow') { // apparently this is a problem in Safari
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}