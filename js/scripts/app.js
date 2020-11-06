import { featuredLaptops } from './laptop.js'

/*Eventlisteners */
document.body.addEventListener("load", addLaptopInfo);
document.getElementById("laptopOption").addEventListener("change", function () {
    changeInfo(this.value)
})
document.getElementById("work-btn").addEventListener("click", work);
document.getElementById("bank-btn").addEventListener("click", depositWage);
document.getElementById("loan-btn").addEventListener('click', getLoan);

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
let loanAmount = 0;
let price = 0;

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
    laptopPriceElement.innerHTML = featuredLaptops[laptopValue].price + " SEK";
    laptopNameElement.innerHTML = featuredLaptops[laptopValue].name;
    laptopDescriptionElement.innerHTML = featuredLaptops[laptopValue].description;
    laptopImageUrlElement.innerHTML = ` <img src="${featuredLaptops[laptopValue].imageUrl}" class="imageStyle" alt="A picture of a laptop">
    `
    //FIX if case for value undefined
}

function work() {
    userEarnings = parseInt(userEarnings) + parseInt(wage);
    userEarningsElement.innerHTML = "Pay: " + userEarnings + " SEK";
}

function depositWage() {
    userBalance = parseInt(userBalance) + parseInt(userEarnings);
    userEarnings = 0;
    userBalanceElement.innerHTML = "Balance: " + userBalance + " SEK";
    userEarningsElement.innerHTML = "Pay: " + userEarnings + " SEK";
}

function getLoan() {
    if (loanAmount > 0) {
        alert("You have already loaned once, work for more and buy a computer before you loan more money.")
    } else {

        let userLoanInput = prompt("How much money do you need to loan?", "");
        /* 
        1)Checks if the loan is twice the balance, which was not allowed
        2) Checks if the user input is null
        3) checks if it contains a character and not a number*/
        if (userLoanInput > userBalance * 2 || userLoanInput === null || isNaN(userLoanInput)) {
            alert("This input cannot be accepted!");
        }
        else {
            loanAmount = 1;
            userBalance = parseInt(userBalance) + parseInt(userLoanInput);
            userBalanceElement.innerHTML = "Balance: " + userBalance + " SEK";
        }
    }

}

function buyComputer() {

}



addLaptopInfo();