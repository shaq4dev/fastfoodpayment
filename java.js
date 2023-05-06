//Make a decision

// What should I eat?
// User has a number of options to choose from
// If choice requirements are met, then user will then move on to making their order, select payment method, and place their order.

let stepOne = document.getElementById('storeBtn');

stepOne.onclick = function(){
    
    let kfc = document.getElementById('kfc');
    let burgerKing = document.getElementById('burgerKing');
    let wendys = document.getElementById('wendys');
    let mothers = document.getElementById('mothers');


    if (kfc.checked){
        document.getElementById('twos').style.display = 'block';
        document.getElementById('ones').style.display = 'none';
    } else if(burgerKing.checked){
        document.getElementById('threes').style.display = 'block';
        document.getElementById('ones').style.display = 'none';
    } else if(wendys.checked){
        document.getElementById('fours').style.display = 'block';
        document.getElementById('ones').style.display = 'none';
    } else if(mothers.checked){
        document.getElementById('fives').style.display = 'block';
        document.getElementById('ones').style.display = 'none';
    }else {
       alert("No selection was made");
    }

}

// Menu Listing
// KFC MENUS

let kfcPrice1 = document.getElementById('priceKfcF1');
let bigDeal = kfcPrice1.innerHTML = "12.99";


// INC - DEC

let count = 0;

document.getElementById('increment').onclick = function(){
    count += 1; 
    document.getElementById('quantityKfcF1').innerHTML = count;

};

document.getElementById('decrement').onclick = function(){

    count -= 1; 
    document.getElementById('quantityKfcF1').innerHTML = count;

};

// Total 
let quantity = document.getElementById('quantityKfcF1').innerHTML;
quantity = Number(quantity);

let bigDealPrice = bigDeal * quantity;
// console.log(bigDealPrice);

document.getElementById('totalPriceKfcF1').innerHTML = bigDealPrice;

