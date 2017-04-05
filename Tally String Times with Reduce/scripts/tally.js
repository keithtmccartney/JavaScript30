function init() {
    const timeNodes = Array.from(document.querySelectorAll('[data-time]')); // From an array of list items to an array of strings

    console.log(timeNodes);

    const seconds = timeNodes
        .map(node => node.dataset.time)
        .map(timeCode => {
            const [mins, secs] = timeCode.split(':').map(parseFloat /*function(str) {
                return parseFloat(str);
            }*/);

            return (mins * 60) + secs;

            console.log(mins, secs);
        })
        .reduce((total, vidSeconds) => /*{
            return*/ total + vidSeconds
        /*}*/)

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);

    console.log(secondsLeft);
    console.log(hours);

    secondsLeft = secondsLeft % 3600; // Mod(ulus); how many (the Smarties :P) are left after being evenly distributed

    const mins = Math.floor(secondsLeft / 60);

    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, secondsLeft);

    console.log(seconds);
}