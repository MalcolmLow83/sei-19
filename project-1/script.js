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

//random customerMoney cost
var randomFloatNumber2 = Math.random() * (99.9 - 0.1) + 0.1;
    console.log("randomFloatNumber2: " + randomFloatNumber2);

//round off to 1 decimal place
var randomCustomerMoney = randomFloatNumber2.toFixed(1);
    console.log("CustomerMoney: " + randomCustomerMoney);

//correct change formula
var correctChange = (randomCustomerMoney - randomItemCost);
    console.log("check: " + correctChange);

var inputChange = "";

//logic testing
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