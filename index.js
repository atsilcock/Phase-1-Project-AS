// Submit Button Variable 

const submitButton = document.querySelector('#sum-form');

//Table Variables

const submitFetchButton = document.getElementById("testButton")
const electricInput = document.getElementById("electricAmount");
const rentInput = document.getElementById("rentAmount");
const gasInput = document.getElementById("gasAmount");
const waterInput = document.getElementById("waterAmount");
const phoneInput = document.getElementById("phoneAmount");


//Form Variables

const formParametersElement = document.getElementById('formParameters');
const electricBody = document.getElementById('electric-body');

let totalIsVisible = false;

//Event Listener 

document.addEventListener("DOMContentLoaded",(event)=>{
    fetch(url, {
        method: "GET",
    })
    .then(response => response.json())
    .then(response=>{
        const residentialData = response.response.data.filter(item => item['sectorName'] == 'residential')
        const rows = residentialData.map(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = 
            `<td></td> 
            <td>${item.period}</td>
            <td>${item.stateid}</td>
            <td>${item.stateDescription}</td>
            <td>${item.period}</td>
            <td>${item.sectorid}</td>
            <td>${item.sectorName}</td>
            <td>${item.price}</td>`
            return tr;
        })
        rows.forEach(row => {
            electricBody.appendChild(row)
        })
        });
});

submitButton.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateTotal();
    totalIsVisible = !totalIsVisible 
    if (totalIsVisible){
        formParametersElement.classList.remove('hidden')
    } else {
        formParametersElement.classList.add('hidden')
    }
    console.log(submitButton)
});



document.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter') {
        calculateTotal();
        console.log(submitButton);
        console.log('Enter Key Pressed')
    }
});

//URL's 

//Electric
const url = "https://api.eia.gov/v2/electricity/retail-sales/data/?api_key=DSoIexmljF94PXO13LN5lyCmuRhsWNAI2BqGaA03&frequency=monthly&data[0]=price&facets[stateid][]=CO&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000"


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



