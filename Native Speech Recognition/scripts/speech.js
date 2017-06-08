// const recognition = new SpeechRecognition();
// const words = document.querySelector('.words');
// const transcript;
// let p = document.createElement('p');

var recognition;
var words;
var transcript;
var p;

function init() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // On Chrome this exists on 'webkitSpeechRecognition'; currently it's only available on Firefox;

    recognition = new SpeechRecognition();

    recognition.interimResults = true;

    p = document.createElement('p');

    words = document.querySelector('.words');

    words.appendChild(p);

    recognition.addEventListener('result', e => {
        console.log(e.results); // No Map or ForEach so isn't an array but is a list;

        transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

            p.textContent = transcript;

            if (e.results[0].isFinal) {
                p = document.createElement('p');

                words.appendChild(p);
            }

            if (transcript.includes('unicorn')) {
                console.log('🦄🦄🦄🦄🦄')
            }

            /*if (transcript.includes('get the weather')) {
                console.log('Getting the weather'); // Siri go get the weather; Getting the weather; Hook into external weather APIs, etc;
            }*/

        console.log(transcript);
    });

    recognition.addEventListener('end', recognition.start);

    recognition.start();
}