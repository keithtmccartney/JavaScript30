// const video = document.querySelector('.player');
// const canvas = document.querySelector('.photo');
// const ctx = canvas.getContext('.2d');
// const strip = document.querySelector('.strip');
// const snap = document.querySelector('.snap');

var video;
var canvas;
var ctx;
var strip;
var snap;

function init() {
    video = document.querySelector('.player');
    canvas = document.querySelector('.photo');
    ctx = canvas.getContext('2d');
    strip = document.querySelector('.strip');
    snap = document.querySelector('.snap');

    getVideo();

    video.addEventListener('canplay', paintToCanvas);
}

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }) // Previously - navigator.getUserMedia() - in some of the older browser versions
        .then(localMediaStream => {
            console.log(localMediaStream);

            video.src = window.URL.createObjectURL(localMediaStream);

            // play the video!
            video.play();
        })
        .catch((err) => {
            console.error(`OH NO!!!`, err);
            /*console.log('The following error occurred: ' + err);*/
        })
}

function paintToCanvas() {
    /* The next four lines set the canvas to the same size as the video */
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    // return the timer incase we ever need it
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        // get the pixels from the canvas
        let pixels = ctx.getImageData(0, 0, width, height); // we need to re-assign the pixels so not const

        // Red Effect
        // pixels = redEffect(pixels);

        pixels = rgbSplit(pixels);
        // ctx.globalAlpha = 0.1;

        // Green Screen
        // pixels = greenScreen(pixels);

        // Put the pixels back!
        ctx.putImageData(pixels, 0, 0);

        console.log(pixels);

        // debugger;
    }, 16);
}

function takePhoto() {
    // played the sound

    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');

    link.href = data;
    link.setAttribute('download', 'handsome');
    /*link.textContent = 'Download Image';*/
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;

    strip.insertBefore(link, strip.firstChild); // in jQuery.prepend this would be child: Node; this is how it's done in vanilla JS)

    console.log(data); // "text-based representation of the picture of me"; this is a base64 representation;
}

function redEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) { // pixels is not an array but pixels.data is so pixels.length does not work
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
    }

    return pixels;
}

/*function greenEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
    }

    return pixels;
}

function blueEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
    }

    return pixels;
}*/

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i + 550] = pixels.data[i + 2]; // BLUE
    }

    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    /*[...document.querySelectorAll('.rgb input')].forEach((input) => {*/ //conversion to an array is no longer needed
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    console.log(levels);

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
                // take it out!
                pixels.data[i + 3] = 0; // 0 is totally transparent whereas with 255 this would not be the case
            }
    }

    return pixels;
}