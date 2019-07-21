const checkboxes  = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // Check if they had the shit key down
    // AND check if that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // go ahead and do what we please
        checkboxes.forEach(checkbox => {
            //console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                //console.log('In betweenn');
            }
            
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));