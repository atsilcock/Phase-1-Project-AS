const submitButton = document.querySelector('input[type="submit"]');
const electricInput = document.querySelector('input[name="Electric"]');
const rentInput = document.querySelector('input[name="Rent"]');
const gasInput = document.querySelector('input[name="Gas"]');
const waterInput = document.querySelector('input[name="Water"]');
const phoneInput = document.querySelector('input[name="Phone"]');

electricInput.addEventListener('input', function () {
    const electricAmount = parseFloat(electricInput) || 0;  
    calculatetotal();
});