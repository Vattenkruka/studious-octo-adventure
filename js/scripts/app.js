import { featuredLaptops } from './laptop.js'

/*Eventlisteners */
document.body.addEventListener("load", addLaptopInfo);
document.getElementById("laptopOption").addEventListener("change", function () {
    changeInfo(this.value)
})

/*All getElementsById */

const featureDescriptionElement = document.getElementById('laptopFeatureDescription');
const laptopPriceElement = document.getElementById('laptopPrice');
const laptopNameElement = document.getElementById('laptopName');
const laptopDescriptionElement = document.getElementById('laptopDescription');
const laptopImageUrlElement = document.getElementById('image');
const select = document.getElementById("laptopOption");

/*Declaration of variables */
let balance;
let wage = 100;
let name;
let loanAmount;
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
    laptopPriceElement.innerHTML = featuredLaptops[laptopValue].price;
    laptopNameElement.innerHTML = featuredLaptops[laptopValue].name;
    laptopDescriptionElement.innerHTML = featuredLaptops[laptopValue].description;
    laptopImageUrlElement.innerHTML = ` <img src="${featuredLaptops[laptopValue].imageUrl}" class="imageStyle" alt="A picture of a laptop">
    `

    //FIX if case for value undefined

}

function work() {

}

function depositWage() {

}

function getLoan() {


    // if loan is too large

    //if loan is null

    //if loan contains character
}

function buyComputer() {

}



addLaptopInfo();