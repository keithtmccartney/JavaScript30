/**
 * 1ST EDIT
 */

/*function handleUpdate() {
    const inputs = document.querySelectorAll('.controls input');

    for (const suffix of inputs) {
        suffix.dataset.sizing || '';

        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

        console.log(suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}*/
/*----------------------------------------------------------------------------------------------------*/
/**
 * 2ND EDIT
 */

/*// get the inputs
function element() {
    const inputs = [].slice.call(document.querySelectorAll('.controls input'));

    // listen for changes
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}

function handleUpdate(e) {
    // append 'px' to the end of spacing and blur variables
    const suffix = (this.id === 'base' ? '' : 'px');

    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}*/
/*----------------------------------------------------------------------------------------------------*/
/**
 * 3RD EDIT
 */

// get the inputs
function element() {
    const inputs = document.querySelectorAll('.controls input');

    // listen for changes
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}

function handleUpdate(e) {
    // append 'px' to the end of spacing and blur variables
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}