var checkboxes;
let lastChecked;
let inBetween;

function init() {
    checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
}

function handleCheck(e) {
    console.log(e);

    // Check if they had the shift key down
    // AND check that they are checking it
    inBetween = false;

    if (e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;

                console.log('Starting to check them inbetween!');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}