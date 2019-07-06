window.onload=function(){

console.log("Lets freaking do this mal!");

var object = {

            "itemImg": ["img0","img1","img2","img3","img4","img5","img6","img7","img8","img9"],

            "itemName": ["item0","item1","item2","item3","item4","item5","item6","item7","item8","item9"],
};

//for random itemImg & itemName
var randomItem = Math.floor(Math.random() * 10);
    console.log("randomItem: " + randomItem);

//random item cost
var randomFloatNumber1 = Math.random() * (99.9 - 0.1) + 0.1;
    console.log("randomFloatNumber: " + randomFloatNumber1);

//round off to 1 decimal place
var randomItemCost = randomFloatNumber1.toFixed(1);
    console.log("randomItemCost: " + randomItemCost);

//random customerMoney
var randomFloatNumber2 = Math.random() * (99.9 - 0.1) + 0.1;
    console.log("randomFloatNumber2: " + randomFloatNumber2);

//random customerMoney round off to 1 decimal place
var randomCustomerPay = randomFloatNumber2.toFixed(1);
    console.log("CustomerMoney: " + randomCustomerPay);

//correct change formula
var correctChange = (randomCustomerPay - randomItemCost);
    console.log("check: " + correctChange);

var playerChange = "";


//hide page 0
var page0  = document.getElementById("page0");
var hidePage0 = function() {
    console.log(hidePage0)
    if (page0.style.display === "none") {
        page0.style.display = "block";
    }   else {
        page0.style.display = "none";
    }
};

var lover = document.querySelector("button");
    lover.addEventListener("click", hidePage0);


//hide row2a, row2b and 2c
// var row2a = document.getElementById("row2a");
// var row2b = document.getElementById("row2b");
// var row2c = document.getElementById("row2c");

// var hideRow2Childs = function()




// logic testing
if (randomCustomerPay < randomItemCost) {
    console.log("not enough!!");
}
    else if (playerChange === correctChange){
        console.log("thank you! come again!");
    }
    else if (playerChange > 0 && (playerChange > correctChange || playerChange < correctChange)){
        console.log("wrong change!");
}
    else if (playerChange === ""){
        console.log("too slow, customer left angrily~");
    };

};