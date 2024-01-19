// Variables
const submitButton = document.querySelector('input[type="submit"]');
const submitFetchButton = document.getElementById("testButton")
const electricInput = document.querySelector('input[name="Electric"]');
const rentInput = document.querySelector('input[name="Rent"]');
const gasInput = document.querySelector('input[name="Gas"]');
const waterInput = document.querySelector('input[name="Water"]');
const phoneInput = document.querySelector('input[name="Phone"]');
const formParametersElement = document.getElementById('formParameters');
const electricBody = document.getElementById('electric-body');
const gasBody = document.getElementById('gas-Body');
const mouseMovement=document.getElementById('mouseMovement');
const headers = {
    "X-Params": {
        "frequency": "monthly",
        "data": [
            "price"
        ],
        "facets": {
            "stateid": [
                "CO"
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

const gasHeaders = {
    "X-Params": {
        "frequency": "monthly",
        "data": [
            "price"
        ],
        "facets": {
            "stateid": [
                "CO"
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

//URL's 
//Electric
const url = "https://api.eia.gov/v2/electricity/retail-sales/data/?api_key=DSoIexmljF94PXO13LN5lyCmuRhsWNAI2BqGaA03&frequency=monthly&data[0]=price&facets[stateid][]=CO&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000"


// Event Listeners
//Gas
const gasUrl= "https://api.eia.gov/v2/natural-gas/pri/rescom/data/?api_key=DSoIexmljF94PXO13LN5lyCmuRhsWNAI2BqGaA03&frequency=monthly&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000"


//Event Listener 

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    calculateTotal();
    console.log(submitButton)
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateTotal();
        console.log(submitButton);
        console.log('Enter Key Pressed')
    }
});

window.addEventListener('scroll',function() {
   
    console.log('page is being scrolled')
};

//The keydown event is fired when a key is pressed. Unlike the deprecated keypress event, 
// the keydown event is fired for all keys, regardless of whether they produce a character value.


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
        console.log(`-----------------------`)
        console.log(`Residential Data: ${JSON.stringify(residentialData)}`)
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

        const gasData = response.response.data.filter(item => item['sectorName'] == 'gas');
        console.log(`-----------------------`);
        console.log(`Gas Data: ${JSON.stringify(gasData)}`)
        const gasRows = gasData.map(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = 
            `<td></td> 
            <td>${item.period}</td>
            <td>${item.stateid}</td>
            <td>${item.stateDescription}</td>
            <td>${item.period}</td>
            <td>${item.sectorid}</td>
            <td>${item.sectorName}</td>
            <td>${item.price}</td>`;
            return tr;
        });

gasRows.forEach(row => {
    gasBody.appendChild(row)
})
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


