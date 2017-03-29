var hero;
var text;
var walk;

function init() {
    // const hero = document.querySelector('.hero');
    // const text = hero.querySelector('h1');

    hero = document.querySelector('.hero');
    text = hero.querySelector('h1');
    walk = 100; // 100 Pixels for the top-left, top-right, bottom-left, bottom-right shadow stretch

    hero.addEventListener('mousemove', shadow);
}

function shadow(e) {
    console.log(e);

    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;

    const { offsetWidth: width, offsetHeight: height } = hero; // Destructure off the hero element

    let { offsetX: x, offsetY: y } = e;

    console.log(this);

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.Top;
    }

    console.log(x, y);

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    console.log(xWalk, yWalk);

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
    `;
}