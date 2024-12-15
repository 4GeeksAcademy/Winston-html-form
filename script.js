
const form = document.getElementById("myForm");
const errorAlert = document.getElementById("errorMessage");

function alertMessage() {
    const requiredInputs = form.querySelectorAll('[required]');
    
    const hasEmptyInput = Array.from(requiredInputs).some(input => input.value.trim() === '');

    if (hasEmptyInput) {
    
        errorAlert.classList.remove("d-none");

        setTimeout(() => {
            errorAlert.classList.add("d-none");
        }, 2000);
        
        return false;
    }
    
    return true;
}

form.addEventListener('submit', function(event) {

    event.preventDefault();
    
    if (alertMessage()) {
        this.submit();
    }
});


function resetForm () {
    document.getElementById("myForm").reset();
}