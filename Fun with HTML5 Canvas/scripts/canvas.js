var canvas;
var ctx;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function init() {
    // const canvas = document.querySelector('#draw');
    // const ctx = canvas.getContext('2d');

    canvas = document.querySelector('#draw');
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round'; //removing this and the below gives funkiness
    ctx.lineCap = 'round'; //removing this and the above gives funkiness
    ctx.lineWidth = 100;
    // ctx.globalCompositeOperation = 'multiply';

    canvas.addEventListener('mousemove', draw);

    // canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;

        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', () => isDrawing = false);

    canvas.addEventListener('mouseout', () => isDrawing = false);
}

function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused down

    console.log(e);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // hue, saturation, lightness
    // ctx.lineWidth = hue;

    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    /*lastX = e.offsetX;
    lastY = e.offsetY;*/

    //ES6 trick for lastX/lastY lines above; destructuring an array for one-line purposes
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++ // if over 360

    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++; // increment when more than or equal to 100
    } else {
        ctx.lineWidth--; // decrement when less than or equal to 1
    }
}