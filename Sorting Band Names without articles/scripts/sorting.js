function init() {
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

    // if (a > b) {
    //     return 1;
    // } else {
    //     return -1;
    // }

    // const sortedBands = bands.sort(/*function*/ (a, b) => { // If the only thing you're doing in a function is returning something then you an use the Implicit Return (see the "sortedBands" above; for 'one hot line' see the "#bands" querySelector below)
    //     return strip(a) > strip(b) ? 1 : -1;
    // });

    // return strip(a) > strip(b) ? 1 : -1; // Ternary Operator (?:)

    // if (strip(a) > strip(b)) {
    //     return 1;
    // } else {
    //     return -1;
    // }

    document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join(''); // Join into one big string (rather than a comma-separated toString())

    console.log(sortedBands);
}

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim(); // RegEx starting with a carat followed by an in-sensitive "/i"
}