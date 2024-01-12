//Variables

const submitButton = document.querySelector('input[type="submit"]');
const electricInput = document.querySelector('input[name="Electric"]');
const rentInput = document.querySelector('input[name="Rent"]');
const gasInput = document.querySelector('input[name="Gas"]');
const waterInput = document.querySelector('input[name="Water"]');
const phoneInput = document.querySelector('input[name="Phone"]');

// Event Listeners

electricInput.addEventListener('input', function () {
    const electricAmount = parseFloat(electricInput.value) || 0;  
    calculateTotal();
});

rentInput.addEventListener('input', function () {
    const rentAmount = parseFloat(rentInput.value) || 0;
    calculateTotal();
});

gasInput.addEventListener('input', function () {
    const gasAmount = parseFloat(gasInput.value) || 0;
    calculateTotal();
});

waterInput.addEventListener('input', function () {
    const waterAmount = parseFloat(waterInput.value) || 0;
    calculateTotal();
});

phoneInput.addEventListener('input', function () {
    const phoneAmount = parseFloat(phoneInput.value) || 0;
    calculateTotal(phoneAmount);
});

submitButton.addEventListener('input',function() {
    calculateTotal();
})

const newTotal = electricAmount + rentAmount + gasAmount + waterAmount + phoneAmount;
    console.log('Updated Total Amount:', newTotal);

    return newTotal;


console.log('Electric:', electricAmount);
console.log('Rent:', rentAmount);
console.log('Gas:', gasAmount);
console.log('Water:', waterAmount);
console.log('Phone:', phoneAmount);