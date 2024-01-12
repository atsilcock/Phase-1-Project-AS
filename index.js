// Variables
const submitButton = document.querySelector('input[type="submit"]');
const electricInput = document.querySelector('input[name="Electric"]');
const rentInput = document.querySelector('input[name="Rent"]');
const gasInput = document.querySelector('input[name="Gas"]');
const waterInput = document.querySelector('input[name="Water"]');
const phoneInput = document.querySelector('input[name="Phone"]');
const formParametersElement = document.getElementById('formParameters');


// Event Listeners

electricInput.addEventListener('input', function () {
    calculateTotal();
});

rentInput.addEventListener('input', function () {
    calculateTotal();
});

gasInput.addEventListener('input', function () {
    calculateTotal();
});

waterInput.addEventListener('input', function () {
    calculateTotal();
});

phoneInput.addEventListener('input', function () {
    calculateTotal();
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    calculateTotal();
});

// Function to Calculate Total

function calculateTotal() {
    const electricAmount = parseFloat(electricInput.value) || 0;
    const rentAmount = parseFloat(rentInput.value) || 0;
    const gasAmount = parseFloat(gasInput.value) || 0;
    const waterAmount = parseFloat(waterInput.value) || 0;
    const phoneAmount = parseFloat(phoneInput.value) || 0;

    formParametersElement.innerHTML = '';
    displayIndividualAmount('Electric', electricAmount);
    displayIndividualAmount('Rent', rentAmount);
    displayIndividualAmount('Gas', gasAmount);
    displayIndividualAmount('Water', waterAmount);
    displayIndividualAmount('Phone', phoneAmount);
    displaytotalAmount('Total',electricAmount+rentAmount+gasAmount+phoneAmount+waterAmount)

}

function displayIndividualAmount(billName, amount) {
    formParametersElement.innerHTML += `<p><strong>${billName}:</strong> $${amount.toFixed(2)}</p>`;
}

function displaytotalAmount(billName, amount) {
    formParametersElement.innerHTML +=`<p><strong>${billName}:</strong> $${amount.toFixed(2)}</p>`;
}