import { featuredLaptops } from './laptop.js'

/*Eventlisteners */
document.body.addEventListener("load", addLaptopInfo);
document.getElementById("laptopOption").addEventListener("change", function () {
    changeInfo(this.value)
})
document.getElementById("work-btn").addEventListener("click", work);
document.getElementById("bank-btn").addEventListener("click", depositWage);

/*All getElementsById */

const featureDescriptionElement = document.getElementById('laptopFeatureDescription');
const laptopPriceElement = document.getElementById('laptopPrice');
const laptopNameElement = document.getElementById('laptopName');
const laptopDescriptionElement = document.getElementById('laptopDescription');
const laptopImageUrlElement = document.getElementById('image');
const select = document.getElementById("laptopOption");
const userEarningsElement = document.getElementById("userEarnings");
const userBalanceElement = document.getElementById('userBalance');

/*Declaration of variables */
let userBalance = 0;
let wage = 100;
let userEarnings = 0;
let name;
let loanAmount = 0;
let price;

/*Functions */

function addLaptopInfo() {
    const docfrag = document.createDocumentFragment();
    for (let i = 0; i < featuredLaptops.length; i++) {
        docfrag.appendChild(new Option(featuredLaptops[i].name, [i]));
    }
    select.appendChild(docfrag);
}

function changeInfo(laptopValue) {
    featureDescriptionElement.innerHTML = featuredLaptops[laptopValue].featureList;
    laptopPriceElement.innerHTML = featuredLaptops[laptopValue].price +" SEK";
    laptopNameElement.innerHTML = featuredLaptops[laptopValue].name;
    laptopDescriptionElement.innerHTML = featuredLaptops[laptopValue].description;
    laptopImageUrlElement.innerHTML = ` <img src="${featuredLaptops[laptopValue].imageUrl}" class="imageStyle" alt="A picture of a laptop">
    `
    //FIX if case for value undefined
}

function work() {
    userEarnings = parseInt(userEarnings) +parseInt(wage);
    userEarningsElement.innerHTML ="Pay: " + userEarnings + " SEK";
}

function depositWage() {
    userBalance = parseInt(userBalance) +parseInt(userEarnings);
    userEarnings = 0;
    userBalanceElement.innerHTML ="Balance: "+userBalance +" SEK";
    userEarningsElement.innerHTML = "Pay: " + userEarnings + " SEK";
}

function getLoan() {

    // if loan is too large

    //if loan is null

    //if loan contains character
}

function buyComputer() {

}



addLaptopInfo();