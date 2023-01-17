const inputs = document.getElementsByTagName('input');
const errors = document.getElementById("errors")

const messageArea = document.getElementById('textarea')

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', validate)

function validate(e) {
    console.log
    e.preventDefault();

    errors.innerHTML = '';
    
    let errorMessages = [];
    
    for (let inputElement of inputs) {
        if (inputElement.id === 'email') {
            if (!inputElement.value.endsWith('.com')) {
                errorMessages.push('Invalid email address.')
            }
        }

        if (inputElement.id === 'phone' && !inputElement.value) {
                errorMessages.push('Invalid phone number.')
        }

        if ((inputElement.id === "password" && document.getElementById('verify-password')) && (document.getElementById('verify-password').value !== inputElement.value)){
            errorMessages.push("Passwords don't match.")
        }

        if (inputElement.id === "password" && !inputElement.value) {
            errorMessages.push("Enter Password.")
        }
    }

    for (let errorMessage of errorMessages) {
        let pnode = document.createElement("p")
        pnode.innerText = errorMessage;

        errors.appendChild(pnode)
    }
}
