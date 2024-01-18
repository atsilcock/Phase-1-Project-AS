// Variables
const submitButton = document.querySelector('input[type="submit"]');
const submitFetchButton = document.getElementById("testButton")
const electricInput = document.querySelector('input[name="Electric"]');
const rentInput = document.querySelector('input[name="Rent"]');
const gasInput = document.querySelector('input[name="Gas"]');
const waterInput = document.querySelector('input[name="Water"]');
const phoneInput = document.querySelector('input[name="Phone"]');
const formParametersElement = document.getElementById('formParameters');
const headers = {
    "X-Params": {
        "frequency": "monthly",
        "data": [
            "cost"
        ],
        "facets": {
            "location": [
                "CO"
            ],
            "sectorid": [
                1
            ]
        },
        "start": null,
        "end": null,
        "sort": [
            {
                "column": "period",
                "direction": "desc"
            }
        ],
        "offset": 0,
        "length": 5000
    }
}

//const url = "electricity/retail-sales&api_key=DSoIexmljF94PXO13LN5lyCmuRhsWNAI2BqGaA03&"
const url = "https://api.eia.gov/v2/electricity/electric-power-operational-data/data/?api_key=DSoIexmljF94PXO13LN5lyCmuRhsWNAI2BqGaA03&data[0]=price&data[1]=revenue&frequency=monthly&data[0]=cost&facets[location][]=CO&facets[sectorid][]=1&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000"



// Event Listeners


submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    calculateTotal();
});

submitFetchButton.addEventListener('click', function(event){
    event.preventDefault(); console.log('clicked')
    fetch(url, {
        method: "GET",
        headers: headers
    })
    .then(response => response.json())
    .then(response=>console.log(response));
});




//FUNCTIONS 

// DEFINE A FUNCTION
// function nameOfFunction(argument1, argument2){
//     body of function
//     return someValue
// }

// const nameOfFuction = (argument1, argument2) => {
//     body of function
//     return some value
// }

// const singleLineFunction = (argument1, argument2) => whateverYoureReturning

// INVOKE(CALL) A FUNCTION
// nameOfFunction(argument1, argument2) => return someValue
// document.nameOfFunction(argument1, argument2) => return someValue

// fetch function => 
// fetch(path, options(optional)) => returns a promise which represents the response fromt the API

//fetch('someURL', {method: 'GET'...}).then(response => response.json()).then(response => do whatever you want with the JSON object)


// Function to Calculate Total

function calculateTotal() {
    const electricAmount = parseFloat(electricInput.value) || 0;
    const rentAmount = parseFloat(rentInput.value) || 0;
    const gasAmount = parseFloat(gasInput.value) || 0;
    const waterAmount = parseFloat(waterInput.value) || 0;
    const phoneAmount = parseFloat(phoneInput.value) || 0;


function displayIndividualAmount(billName, amount){
    function displayIndividualAmount(billName, amount) {
        formParametersElement.innerHTML += `<p><strong>${billName}:</strong> $${amount.toFixed(2)}</p>`;
    }
}
    formParametersElement.innerHTML = '';
    displaytotalAmount('Total',electricAmount+rentAmount+gasAmount+phoneAmount+waterAmount)

}

function displaytotalAmount(billName, amount) {
    formParametersElement.innerHTML +=`<p><strong>${billName}:</strong> $${amount.toFixed(2)}</p>`;
}


