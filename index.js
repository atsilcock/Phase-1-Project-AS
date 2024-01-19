// Variables
const submitButton = document.querySelector('input[type="submit"]');
const submitFetchButton = document.getElementById("testButton")
const electricInput = document.querySelector('input[name="Electric"]');
const rentInput = document.querySelector('input[name="Rent"]');
const gasInput = document.querySelector('input[name="Gas"]');
const waterInput = document.querySelector('input[name="Water"]');
const phoneInput = document.querySelector('input[name="Phone"]');
const formParametersElement = document.getElementById('formParameters');
const resultsDiv = document.getElementById('fetch-response');
const headers = {
    "X-Params": {
        "frequency": "annual",
        "data": [
            "all-other-costs"
        ],
        "facets": {
            "state": [
                "CO"
            ]
        },
        "start": null,
        "end": null,
        "sort": [
            {
                "column": "state",
                "direction": "desc"
            }
        ],
        "offset": 0,
        "length": 5000
    }
}

//const url = "electricity/retail-sales&api_key=DSoIexmljF94PXO13LN5lyCmuRhsWNAI2BqGaA03&"
const url = "https://api.eia.gov/v2/electricity/state-electricity-profiles/energy-efficiency/data/?frequency=annual&data[0]=all-other-costs&facets[state][]=CO&sort[0][column]=state&sort[0][direction]=desc&offset=0&length=5000&api_key=DSoIexmljF94PXO13LN5lyCmuRhsWNAI2BqGaA03"

// const url = "https://api.eia.gov/v2/electricity/electric-power-operational-data/data/?api_key=DSoIexmljF94PXO13LN5lyCmuRhsWNAI2BqGaA03&data[0]=price&data[1]=revenue&frequency=monthly&data[0]=cost&facets[location][]=CO&facets[sectorid][]=1&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000"



// Event Listeners


submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    calculateTotal();
});

submitFetchButton.addEventListener('click', function(event){
    event.preventDefault(); console.log('clicked')
    fetch(url, {
        method: "GET",
        // headers: headers
    })
    .then(response => response.json())
    .then(response=>{
        // console.log(response.response.data)
        // const keys = new Set()
        // response.response.data.forEach(item=>{
        //     Object.keys(item).forEach(key=>keys.add(key))
        // })
        const residentialData = response.response.data.filter(item => item['sectorName'] == 'residential')
        response.response.data.forEach(item => console.log(item))
        console.log(`-----------------------`)
        console.log(`Residential Data: ${JSON.stringify(residentialData)}`)
        const paragraphs = residentialData.map(item => {
            const p = document.createElement('p');
            p.textContent = JSON.stringify(item)
            return p;
        })
        paragraphs.forEach(paragraph => {
            resultsDiv.appendChild(paragraph)
        })
        });
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


