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