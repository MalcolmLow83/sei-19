window.onload=function(){
console.log("Lets freaking do this mal!");

/*global variables----------------*/
var page0  = document.getElementById("page0");
var page1  = document.getElementById("page1");

var max;
var min;
var decimal;

var playerChange0;
var playerChange = document.querySelector("#playerChange");
var randomItemPriceRoundOff;
var randomCustomerPayRoundOff;

var profit = 0.0;
var lastProfit = document.querySelector("#lastProfit");

var account = document.querySelector("#account");

var object = {

            "itemImg": ["images/fruit1_banana.png","images/fruit1_blueberry.png","images/fruit1_grape.png","images/fruit1_peach.png","images/fruit1_pear.png","images/fruit1_strawberry.png","images/fruit1_banana.png","images/fruit1_blueberry.png","images/fruit1_grape.png","images/fruit1_peach.png"],

            "itemName": ["Banana","Blue Berry","Grape","Peach","Pear","Strawberry","Banana","Blue Berry","Grape","Peach"],
};

/*functions-----------------------*/

//hide page 0
var hidePage0 = function() {
    page0.style.display = "none";
};

//show page 0
var showPage0 = function() {
    page0.style.display = "block";
}

//hide page 0
var hidePage1 = function() {
    page1.style.display = "none";
};

//show page 0
var showPage1 = function() {
    page1.style.display = "block";
}

/*random numbers generation-------*/

/*random item---------------------*/
var randomItemNo = function(){
    let randomNumber = Math.floor(Math.random() * 10);

    //random number random itemImg
    let itemImg = document.querySelector("#itemImg");
        itemImg.src = object.itemImg[randomNumber];

    //random number random itemName
    let itemNameRan = document.querySelector("#itemNameRan");
        itemNameRan.innerHTML = object.itemName[randomNumber];
};

/*random item price---------------*/
// var randomItemPrice = function(){
//     //random item price
//     let randomItemPriceFloatNumber = Math.random() * (.9 - 0.1) + 0.1;

//     //round off to 1 decimal place
//     randomItemPriceRoundOff = randomItemPriceFloatNumber.toFixed(2);

//     let itemPriceRan = document.querySelector("#itemPriceRan");
//         itemPriceRan.innerHTML = "$" + randomItemPriceRoundOff;
// };

/*random customer pay-------------*/
// var randomCustomerPay = function(){
//     //random customerMoney
//     let randomCustomerPayFloatNumber = Math.random() * (.9 - 0.1) + 0.1;

//     //random customerMoney round off to 1 decimal place
//     randomCustomerPayRoundOff = randomCustomerPayFloatNumber.toFixed(2);

//     let customerPayRan = document.querySelector("#customerPayRan");
//         customerPayRan.innerHTML = "$" + randomCustomerPayRoundOff;
// };

var randomItemPrice = function(max, min, decimal){
    //random item price
    let randomItemPriceFloatNumber = Math.random() * (max - min) + min;

    //round off to 1 decimal place
    randomItemPriceRoundOff = randomItemPriceFloatNumber.toFixed(2);

    let itemPriceRan = document.querySelector("#itemPriceRan");
        itemPriceRan.innerHTML = "$" + randomItemPriceRoundOff;
};

var randomCustomerPay = function(max, min, decimal){
    //random customerMoney
    let randomCustomerPayFloatNumber = Math.random() * (max - min) + min;

    //random customerMoney round off to 1 decimal place
    randomCustomerPayRoundOff = randomCustomerPayFloatNumber.toFixed(decimal);

    let customerPayRan = document.querySelector("#customerPayRan");
        customerPayRan.innerHTML = "$" + randomCustomerPayRoundOff;
};

/*functions ends------------------*/

var level = document.querySelector("#level");
    level.addEventListener("click", function(){

        if (level.innerHTML === "Level: 0") {
            level.innerHTML = "Level: 1";
            max = 9.0;
            min = 0.1;
            decimal = 2;
        }
        else if (level.innerHTML === "Level: 1") {
            level.innerHTML = "Level: 2";
            max = 99.0;
            min = 0.1;
            decimal = 2;
            console.log(max);
            console.log(min);
            console.log(decimal);
        }
        else if (level.innerHTML === "Level: 2") {
            level.innerHTML = "Level: 0"
            max = 0.9;
            min = 0.1;
            decimal = 2;
        }
    });

var playerInputName = document.querySelector("#playerInputName");
    playerInputName.addEventListener("change", function(){
        var playerName = document.querySelector("#playerName");
        playerName.innerHTML = playerInputName.value;
        console.log("playerInputName.value: " + playerInputName.value);
    });

/*buttons-------------------------*/
var startButton = document.querySelector("#startButton");
    startButton.addEventListener("click", function(){
        randomItemNo();
        randomItemPrice(max, min, decimal);
        randomCustomerPay(max, min, decimal);
        console.log(max);
        console.log(min);
        console.log(decimal);
        playerChange.value = null;
        hidePage0();
        showPage1();
        endGameButton.value = false;
    });

var endGameButton = document.querySelector("#endGameButton");
    endGameButton.addEventListener("click", function(){
        lastProfit.value = parseFloat(profit);
        hidePage1();
        showPage0();
        endGameButton.value = true
    });


// var playerChange = document.querySelector("#playerChange");
playerChange.addEventListener("change", function(){
        console.log("playerChange.value: " + playerChange.value);
        if (endGameButton.value === false) {

            // correct change formula for checking against playerChange
            let correctChangeFloat = (randomCustomerPayRoundOff - randomItemPriceRoundOff);
            let correctChange = correctChangeFloat.toFixed(2);
            console.log("correctChange: " + correctChange);


            if (playerChange.value === 0.0 && correctChange === 0.0) {
                alert("Thank You Very Much! Please Come Again!");
                playerChange.value = null;
                randomItemNo();
                randomItemPrice(max, min, decimal);
                randomCustomerPay(max, min, decimal);

            }
            else if (playerChange.value === correctChange && correctChange > 0) {
                lastProfit.value = lastProfit.value + parseFloat(playerChange.value);
                alert("Thank you very much! Please Come Again!");
                playerChange.value = null;
                randomItemNo();
                randomItemPrice(max, min, decimal);
                randomCustomerPay(max, min, decimal);

            }
            else if (playerChange.value < correctChange && correctChange > 0) {
                alert("Under-Change!! Correct Change is " + correctChange);
                playerChange.value = null;
                randomItemNo();
                randomItemPrice(max, min, decimal);
                randomCustomerPay(max, min, decimal);

            }
            else if (playerChange.value > correctChange && correctChange > 0) {
                alert("Over-Change!! Correct Change is " + correctChange);
                playerChange.value = null;
                randomItemNo();
                randomItemPrice(max, min, decimal);
                randomCustomerPay(max, min, decimal);

            }
            else if (correctChange < 0 && playerChange.value > 0) {
                alert("Oh no! Customer Have under-Paid You!!");
                playerChange.value = null;
                randomItemNo();
                randomItemPrice(max, min, decimal);
                randomCustomerPay(max, min, decimal);

            }
            else if (correctChange < 0 && parseInt(playerChange.value) === 0) {
                alert("Good job! You Spotted a Under-Paying Customer!!");
                playerChange.value = null;
                randomItemNo();
                randomItemPrice(max, min, decimal);
                randomCustomerPay(max, min, decimal);

            }
            else if (playerChange.value < 0) {
                alert("Sorry~ We don't Understand");
            };

        }

});



};