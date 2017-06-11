// const arrow = document.querySelector('.arrow');
// const speed = document.querySelector('.speed-value');

var arrow;
var speed;

function init() {
    arrow = document.querySelector('.arrow');
    speed = document.querySelector('.speed-value'); // Kilometers Per Hour;

    navigator.geolocation.watchPosition((data) => { // Get current position will give us it the once; Watch is as frequently as movement occurs;
        console.log(data);

        speed.textContent = data.coords.speed; // Math.round(data.coords.speed);

        arrow.style.transform = `rotate(${data.coords.heading}deg)`; // Already 360 degree based so no math is involved; Latitude/Longitude (maybe Google Maps) is in 'data.coords';
    }, (err) => {
        console.error(err);

        alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
    });
}