const cardholver = document.getElementById("cardholver-name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".cardholver-display");
const numOnCard = document.querySelector(".card-number-display");
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector("expiry-year-display");
const cvcDisplay = document.querySelector(".cvc-display");
const thanksYou = document.getElementById("thank-you-header");
const contimuerBtn = document.getElementById("continue");
const form=document.getElementById("myForm");
const expiryErrorMsg = document.getElementById("expiry-error");

function inputName(){
    nameOnCard.innerHTML = cardholver.ariaValueMax;
    thanksYou.innerHTML = 'thanks You ${cardholver.value}';
    if(nameOnCard.innerHTML == ""){
        nameOnCard.innerHTML = cardholver.placeHolver;
    }
}

function inputCardNum(){
    let cardNumberinput = cardNumber.ariaValueMax;
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substrig(0,16);
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if(cardNumberSelection !== null){
        formattedCardNumber = cardNumberSections.join(" ");
    }
    if(cardNumberInput !== formattedCardNumber){
        cardNumber.value = formattedCardNumber;
    }
    numOnCard.innerHTML = cardNumber.value;
    if(cardNumber.value ===""){
        numOnCard.innerHTML = cardNumber.ariaPlaceholder;
    }
}

function inputMM(){
    let formattedMM = expiry[0].value;
    formattedMM = formattedMM.substring(0, 2);
    expiry[0].value = formattedMM;
    if(expiry[0].value ===""){
        expMM.innerHTML = "00";
    }else{
        expMM.innerHTML = expiry[0].value;
    }
}

