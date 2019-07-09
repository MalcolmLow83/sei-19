window.onload=function(){
console.log("Hang in there Mal! Just hang in there... 👼");

/*global variables----------------*/
var account = document.querySelector("#account");

var page0  = document.getElementById("page0");
var page1  = document.getElementById("page1");

var max = 0.9;
var min = 0.1;
var decimal = 2;

var chaChing = new Audio();
chaChing.src = "sound/cha_ching.mp3";

var happyNumber = document.querySelector("#happyNumber");
    happyNumber.innerHTML = "0%";
var happyNumberCount = 0;

var customerNumber = document.querySelector("#customerNumber");
    customerNumber.innerHTML = "0";
var customerNumberCount = 0;

var playerChange0;
var playerChange = document.querySelector("#playerChange");
var randomItemPriceRoundOff;
var randomCustomerPayRoundOff;

// var profitFloat = 10.0;
var profitFloat = 0.0;
var profitRoundOff;
var lastProfit = document.querySelector("#lastProfit");
    // lastProfit.innerHTML = "$ " + 10;
    lastProfit.innerHTML = "$ " + profitFloat.toString();

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
        playerName.innerHTML = "Hi " + playerInputName.value;
    });

/*buttons-------------------------*/
var startButton = document.querySelector("#startButton");
    startButton.addEventListener("click", function(){
        happyNumberCount = 0;
        customerNumberCount = 0;
        randomItemNo();
        randomItemPrice(max, min, decimal);
        randomCustomerPay(max, min, decimal);
        playerChange.value = null;
        hidePage0();
        showPage1();
        endGameButton.value = false;

    });

var endGameButton = document.querySelector("#endGameButton");
    endGameButton.addEventListener("click", function(){

        profitRoundOff = profitFloat.toFixed(2);
        lastProfit.innerHTML = "$ " + profitRoundOff.toString();

        hidePage1();
        showPage0();
        endGameButton.value = true
    });


// var playerChange = document.querySelector("#playerChange");
playerChange.addEventListener("change", function(){
        // console.log("playerChange.value: " + playerChange.value);
        if (endGameButton.value === false) {

            // correct change formula for checking against playerChange
            let correctChangeFloat = (randomCustomerPayRoundOff - randomItemPriceRoundOff);
            let correctChange = correctChangeFloat.toFixed(2);
            // console.log("correctChange: " + correctChange);


            if (playerChange.value === 0.00 && correctChange === 0.00) {
                profitFloat = profitFloat + parseFloat(randomItemPriceRoundOff);
                happyNumberCount = happyNumberCount + 1;
                chaChing.play();
                alert("Thank You Very Much! Please Come Again!");

            }
            else if (playerChange.value === correctChange && correctChange > 0) {
                profitFloat = profitFloat + parseFloat(randomItemPriceRoundOff);
                happyNumberCount = happyNumberCount + 1;
                chaChing.play();
                alert("Thank you very much! Please Come Again!");

            }
            else if (playerChange.value < correctChange && correctChange > 0) {
                profitFloat = profitFloat - parseFloat(correctChange - playerChange.value);
                alert("Under-Change!! Correct Change is " + correctChange);

            }
            else if (playerChange.value > correctChange && correctChange > 0) {
                profitFloat = profitFloat - parseFloat(playerChange.value - correctChange);
                alert("Over-Change!! Correct Change is " + correctChange);

            }
            else if (correctChange < 0 && playerChange.value > 0) {
                profitFloat = profitFloat - parseFloat(randomItemPriceRoundOff);
                alert("Oh no! You gave away your item!!");

            }
            else if (correctChange < 0 && parseInt(playerChange.value) === 0) {
                profitFloat = profitFloat + parseFloat(randomItemPriceRoundOff);
                happyNumberCount = happyNumberCount + 1;
                alert("Good job! You Spotted a Under-Paying Customer!!");

            }
            else if (playerChange.value < 0) {
                alert("Sorry~ We don't Understand");

            }
            playerChange.value = null;
            customerNumberCount = customerNumberCount + 1;

            //covert happy number to percentage, round off happy to 1 decimal place and DOM to happy percentage
            let happyNumberCountRoundOff = (happyNumberCount / customerNumberCount * 100).toFixed(1);
            happyNumber.innerHTML = happyNumberCountRoundOff.toString() + "%";

            //DOM to customerNumber
            customerNumber.innerHTML = customerNumberCount.toString();

            console.log("profitFloat: " + profitFloat);
            randomItemNo();
            randomItemPrice(max, min, decimal);
            randomCustomerPay(max, min, decimal);
        }

});

};