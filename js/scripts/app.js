import { featuredLaptops } from './laptop.js'

/*Eventlisteners */
document.body.addEventListener("load", addLaptopInfo);
document.getElementById("laptopOption").addEventListener("change", function () {
    changeInfo(this.value)
})
document.getElementById("work-btn").addEventListener("click", work);
document.getElementById("bank-btn").addEventListener("click", depositWage);
document.getElementById("loan-btn").addEventListener('click', getLoan);
document.getElementById('buy-btn').addEventListener('click', buyComputer);

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

// Function which adds options to the dropdownlist based on the featuredLaptop list
function addLaptopInfo() {
    const docfrag = document.createDocumentFragment();
    for (let i = 0; i < featuredLaptops.length; i++) {
        docfrag.appendChild(new Option(featuredLaptops[i].name, [i]));
    }
    select.appendChild(docfrag);
}
// Function which changes the layout depending on which laptop is chosen in the 
// dropdown list
function changeInfo(laptopValue) {

    console.log(laptopValue)
    //if-case for value undefined
    if (laptopValue === 'undefined') {
        displayNoBlocks();
    }
    //otherwise show information for laptops
    else {
        displayBlocks();
        featureDescriptionElement.innerHTML = (featuredLaptops[laptopValue]).featureList;
        laptopPriceElement.innerHTML = featuredLaptops[laptopValue].price + " SEK";
        price = featuredLaptops[laptopValue].price;
        laptopNameElement.innerHTML = featuredLaptops[laptopValue].name;
        laptopDescriptionElement.innerHTML = featuredLaptops[laptopValue].description;
        laptopImageUrlElement.innerHTML = ` <img src="${featuredLaptops[laptopValue].imageUrl}" class="imageStyle" alt="A picture of a laptop">
    `
    }

}
//Function to add money to the earnings for the work. 100 SEK for each click.
function work() {
    userEarnings = parseInt(userEarnings) + parseInt(wage);
    userEarningsElement.innerHTML = "Pay: " + userEarnings + " SEK";
}

// Function which deposits the earnings to the bank account
function depositWage() {
    userBalance = parseInt(userBalance) + parseInt(userEarnings);
    userEarnings = 0;
    userBalanceElement.innerHTML = "Balance: " + userBalance + " SEK";
    userEarningsElement.innerHTML = "Pay: " + userEarnings + " SEK";
}

// Function which handles the user interaction for loans
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

//Function which handles the user interaction for buying a computer
function buyComputer() {
    // Checks if balance is higher or equal to price.
    if (userBalance >= price) {
        userBalance = parseInt(userBalance) - parseInt(price);
        userBalanceElement.innerHTML = "Balance: " + userBalance + " SEK";
        loanAmount = 0;
        alert("Congratulations! You just bought a new laptop!");
    }
    else {
        alert("Insufficient funds..! Work for more money or loan to be able to fund the purchase!")
    }
}

function displayBlocks() {
    document.getElementById('laptopFeatureDescription').style.display = "block";
    document.getElementById('laptopPrice').style.display = "block";
    document.getElementById('laptopName').style.display = "block";
    document.getElementById('laptopDescription').style.display = "block";
    document.getElementById('image').style.display = "block";
}

function displayNoBlocks() {
    document.getElementById('laptopFeatureDescription').style.display = "none";
    document.getElementById('laptopPrice').style.display = "none";
    document.getElementById('laptopName').style.display = "none";
    document.getElementById('laptopDescription').style.display = "none";
    document.getElementById('image').style.display = "none";
}


addLaptopInfo();