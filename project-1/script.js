window.onload=function(){
console.log("Lets freaking do this mal!");

/*global variables----------------*/
var playerChange0;
var playerChange = document.querySelector("#playerChange");
var notEnough = document.querySelector("#notEnough");

var object = {

            "itemImg": ["img0","img1","img2","img3","img4","img5","img6","img7","img8","img9"],

            "itemName": ["itemName0","itemName1","itemName2","itemName3","itemName4","itemName5","itemName6","itemName7","itemName8","itemName9"],
};

/*functions-----------------------*/

//hide and show function for page 0
let page0  = document.getElementById("page0");

//hide page 0
var hidePage0 = function() {
    page0.style.display = "none";
};

//show page 0
var showPage0 = function() {
    page0.style.display = "block";
}

//hide and show function for page 1
let page1  = document.getElementById("page1");

//hide page 0
var hidePage1 = function() {
    page1.style.display = "none";
};

//show page 0
var showPage1 = function() {
    page1.style.display = "block";
}

/*random numbers generation-------*/

//random number random itemImg & itemName
let randomItem = Math.floor(Math.random() * 10);
    // console.log("randomItem: " + randomItem);

/*level 0-------------------------*/

//random item price
let randomFloatNumber00 = Math.random() * (.9 - 0.1) + 0.1;
    // console.log("randomFloatNumber0: " + randomFloatNumber00);

//round off to 1 decimal place
let randomItemPrice0 = randomFloatNumber00.toFixed(1);
    // console.log("randomItemPrice0: " + randomItemPrice0);

//random customerMoney
let randomFloatNumber01 = Math.random() * (.9 - 0.1) + 0.1;
    // console.log("randomFloatNumber01: " + randomFloatNumber01);

//random customerMoney round off to 1 decimal place
let randomCustomerPay0 = randomFloatNumber01.toFixed(1);
    // console.log("randomCustomerPay0: " + randomCustomerPay0);

// DOM random data to game screen
let itemNameRan = document.querySelector("#itemNameRan");
    itemNameRan.innerHTML = object.itemName[randomItem];

let itemPriceRan = document.querySelector("#itemPriceRan");
    itemPriceRan.innerHTML = "$" + randomItemPrice0 + "0";

let customerPayRan = document.querySelector("#customerPayRan");
    customerPayRan.innerHTML = "$" + randomCustomerPay0 + "0";

/*level 1-------------------------*/

//random item cost
let randomFloatNumber11 = Math.random() * (99.9 - 0.1) + 0.1;
    // console.log("randomFloatNumber1: " + randomFloatNumber1);

//round off to 2 decimal place
let randomItemCost1 = randomFloatNumber11.toFixed(2);
    // console.log("randomItemCost1: " + randomItemCost1);

//random customerMoney
let randomFloatNumber12 = Math.random() * (99.9 - 0.1) + 0.1;
    // console.log("randomFloatNumber2: " + randomFloatNumber2);

//random customerMoney round off to 1 decimal place
let randomCustomerPay1 = randomFloatNumber12.toFixed(1);
    // console.log("CustomerMoney: " + randomCustomerPay);

/*functions ends------------------*/



/*start game----------------------*/

//when start button is clicked, hide page 0 and show page 1
var endGame = document.querySelector("#endGame");
    endGame.addEventListener("click", function(){
        hidePage1();
        showPage0();
        endGame.value = true
        console.log("endGame.value: " + endGame.value);
    });


var startButton = document.querySelector("#startButton");
    startButton.addEventListener("click", function(){
        playerChange.value = null;
        // testRandom();
        console.log("playerChange.value: " + playerChange.value);
        hidePage0();
        showPage1();
        endGame.value = false;
        notEnough.value = false;
        console.log("endGame.value: " + endGame.value);
    });

/*player plays game---------------*/

notEnough.addEventListener("click", function(){
        notEnough.value = true;
        console.log("notEnough.value: " + notEnough.value);
    });

// var playerChange = document.querySelector("#playerChange");
playerChange.addEventListener("change", function(){
    console.log("playerChange.value: " + playerChange.value);

        if (endGame.value === false) {
            playerChange0 = playerChange.value;
            console.log("playerChange0: " + playerChange0);

            //correct change formula for checking against playerChange
            let correctChangeFloat0 = (randomCustomerPay0 - randomItemPrice0);
            let correctChange0 = correctChangeFloat0.toFixed(1);
            console.log("correctChange0: " + correctChange0);

            if (playerChange0 === correctChange0 && correctChange0 > 0) {
                alert("thank you! come again!");
                playerChange.value = null;
                // testRandom();

            }
            else if (playerChange0 < correctChange0 && correctChange0 > 0) {
                alert("under-change!!");
                playerChange.value = null;
                // testRandom();

            }
            else if (playerChange0 > correctChange0 && correctChange0 > 0) {
                alert("over-change!!");
                playerChange.value = null;
                // testRandom();

            }
            else if (playerChange0 === 0.0 && correctChange0 === 0.0) {
                alert("thank you! come again!");
                // testRandom();
            }

            else if (correctChange0 < 0) {
                alert("Good job! You spotted under-paying customer!!");
                playerChange.value = null;
                // testRandom();
            }
        }

});


};