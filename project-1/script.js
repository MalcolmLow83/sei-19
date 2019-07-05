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
var randomCustomerMoney = randomFloatNumber2.toFixed(1);
    console.log("CustomerMoney: " + randomCustomerMoney);

//correct change formula
var correctChange = (randomCustomerMoney - randomItemCost);
    console.log("check: " + correctChange);

var inputChange = "";


//hide row 2
var x  = document.getElementById("row2");
var y = function myFunction() {
    console.log(x)
    if (x.style.display === "none") {
        x.style.display = "block";
    }   else {
        x.style.display = "none";
    }
};

var lover = document.querySelector("button");
    lover.addEventListener("click", y);


//hide row2a, row2b and 2c
// var row2a = document.getElementById("row2a");
// var row2b = document.getElementById("row2b");
// var row2c = document.getElementById("row2c");

// var hideRow2Childs = function()




// logic testing
if (randomCustomerMoney < randomItemCost) {
    alert("not enough!!");
}
    else if (inputChange === correctChange){
        alert("thank you! come again!");
    }
    else if (inputChange > 0 && (inputChange > correctChange || inputChange < correctChange)){
        alert("wrong change!");
}
    else if (inputChange === ""){
        alert("too slow, customer left angrily~");
    };

};