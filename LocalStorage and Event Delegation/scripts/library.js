var addItems;
var itemsList;
var items;

function init() {
    // const addItems = document.querySelector('.add-items');
    // const itemsList = document.querySelector('.plates');
    // const items = JSON.parse(localStorage.getItem('items')) || [];

    /*
    const checkBoxes = document.querySelectorAll('input');

    checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi'))); // When this code (EventListener/Selector) runs we need to populate the list first; there is no listening after its been created so only newly created entries will Alert
    */

    addItems = document.querySelector('.add-items');
    itemsList = document.querySelector('.plates');
    items = JSON.parse(localStorage.getItem('items')) || [];

    addItems.addEventListener('submit', addItem);

    itemsList.addEventListener('click', toggleDone);

    populateList(items, itemsList);
}

function addItem(e) {
    e.preventDefault();

    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    items.push(item);

    populateList(items, itemsList);

    localStorage.setItem('items', JSON.stringify(items));

    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `<li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />

                    <label for="item${i}">${plate.text}</label>
                </li>`;
    }).join(''); // Take the array and make it one big string
}

function toggleDone(e) {
    console.log(e.target);

    if (!e.target.matches('input')) return; // skip this unless it's an input; 'matches' is a new API in the Browser (similar to jQuery .is/input)

    const el = e.target;
    const index = el.dataset.index;

    items[index].done = !items[index].done;

    localStorage.setItem('items', JSON.stringify(items));

    populateList(items, itemsList);
}