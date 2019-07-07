window.onload=function(){

console.log("Lets freaking do this mal!");

var object = {

            "itemImg": ["img0","img1","img2","img3","img4","img5","img6","img7","img8","img9"],

            "itemName": ["itemName0","itemName1","itemName2","itemName3","itemName4","itemName5","itemName6","itemName7","itemName8","itemName9"],
};




/*--------------level 0-----------*/

//random item price
var randomFloatNumber00 = Math.random() * (.9 - 0.1) + 0.1;
    console.log("randomFloatNumber0: " + randomFloatNumber00);

//round off to 1 decimal place
var randomItemPrice0 = randomFloatNumber00.toFixed(1);
    console.log("randomItemPrice0: " + randomItemPrice0);

//random customerMoney
var randomFloatNumber01 = Math.random() * (.9 - 0.1) + 0.1;
    console.log("randomFloatNumber01: " + randomFloatNumber01);

//random customerMoney round off to 1 decimal place
var randomCustomerPay0 = randomFloatNumber01.toFixed(1);
    console.log("randomCustomerPay0: " + randomCustomerPay0);

//random number random itemImg & itemName
var randomItem = Math.floor(Math.random() * 10);
    console.log("randomItem: " + randomItem);

//DOM to game screen

var itemNameRan = document.querySelector("#itemNameRan");
    itemNameRan.innerHTML = object.itemName[randomItem];

var itemPriceRan = document.querySelector("#itemPriceRan");
    itemPriceRan.innerHTML = "$" + randomItemPrice0 + "0";

var customerPayRan = document.querySelector("#customerPayRan");
    customerPayRan.innerHTML = "$" + randomCustomerPay0 + "0";

var playerChange0 = document.querySelector("#playerChange");
    playerChange0.innerHTML = "$" + randomCustomerPay0 + "0";
    console.log("playerChange0: " + playerChange0);

//correct change formula
var correctChange0 = (randomCustomerPay0 - randomItemPrice0);
    console.log("correctChange0: " + correctChange0);



/*--------------level 1-----------*/


//random item cost
var randomFloatNumber11 = Math.random() * (99.9 - 0.1) + 0.1;
    // console.log("randomFloatNumber1: " + randomFloatNumber1);

//round off to 2 decimal place
var randomItemCost1 = randomFloatNumber11.toFixed(2);
    // console.log("randomItemCost1: " + randomItemCost1);


//random customerMoney
var randomFloatNumber12 = Math.random() * (99.9 - 0.1) + 0.1;
    // console.log("randomFloatNumber2: " + randomFloatNumber2);

//random customerMoney round off to 1 decimal place
var randomCustomerPay1 = randomFloatNumber12.toFixed(1);
    // console.log("CustomerMoney: " + randomCustomerPay);


/*--------------level 1 end-----------*/


//hide page 0 and show page 1
var page0  = document.getElementById("page0");
var hidepage0 = function() {
    // console.log(hidePage0)
    if (page0.style.display === "none") {

        page0.style.display = "block";
    }
    else {
        page0.style.display = "none";
    }
};

var page1  = document.getElementById("page1");
var hidePage1 = function() {
    // console.log(hidePage1)
    if (page1.style.display === "none") {

        page1.style.display = "none";
    }
    else {
        page1.style.display = "block";
    }
};

var button = document.querySelector("button");
    button.addEventListener("click", hidepage0);
    button.addEventListener("click", hidePage1);














// logic testing
if (randomCustomerPay0 < randomItemPrice0) {
    console.log("not enough!!");
}
    else if (playerChange0 === correctChange0){
        console.log("thank you! come again!");
    }
    else if (playerChange0 > 0 && (playerChange0 > correctChange0 || playerChange0 < correctChange0)){
        console.log("wrong change!");
}
    else if (playerChange0 === ""){
        console.log("too slow, customer left angrily~");
    };

};