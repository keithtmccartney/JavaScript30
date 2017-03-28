function makeGreen() {
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]

    const p = document.querySelector('p');

    p.style.color = '#BADA55';
    p.style.fontSize = '50px';

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', '💩');
    /*console.log(`Hello I am  ${var}`);*/

    // Styled
    /*console.log('%c I am  some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');*/

    // warning!
    console.warn('OH NOOO');

    // Error : /
    console.error('Shit!');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    /*console.assert(1 === 2, 'That is wrong!');*/

    /*const p = document.querySelector('p');*/

    /*console.assert(p.classList.contains('ouch'), 'That is wrong!');*/
    console.assert(p.classList.contains('ouch'), 'You did not select the right Element!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Keith');
    console.count('Dau');
    console.count('Dau');
    console.count('Long');
    console.count('Mark');
    console.count('Keith');

    // timing
    console.time('fetching data');

    fetch('https://api.github.com/users/keithtmccartney')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });

    // table
    console.table(dogs);
}