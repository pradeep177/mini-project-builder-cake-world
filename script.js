/*Fill your code */
var amount = 0;
//function to display item-1 and amount in template2
function displayItem1(id,text){
    document.getElementById(id).innerHTML = text;
    amount = amount + 300;
    document.getElementById('chocolate-1').classList.add('chocolate-1');
}
//function to display item-2 and amount in template2
function displayItem2(id,text){
    document.getElementById(id).innerHTML = text;
    amount = amount + 100;
    document.getElementById('strawberry-1').classList.add('strawberry-1');

}
//function to display item-3 and amount in template2
function displayItem3(id,text){
    document.getElementById(id).innerHTML = text;
    amount = amount + 200;
    document.getElementById('butterscotch-1').classList.add('butterscotch-1');
}
//function to display item-4 and amount in template2
function displayItem4(id,text){
    document.getElementById(id).innerHTML = text;
    amount = amount + 250;
    document.getElementById('vanilla-1').classList.add('vanilla-1');
}
//function to display item-5 and amount in template2
function displayItem5(id,text){
    document.getElementById(id).innerHTML = text;
    amount = amount + 350;
    document.getElementById('redvelvet-1').classList.add('redvelvet-1');
}
//function to display total amount in template2 
function displayItem6(id){
    document.getElementById(id).innerHTML = 'TOTAL-------' + amount;
    
    var cake = document.getElementById('cakes');
    var x = document.createElement("IMG");
    x.setAttribute("src", "./assets/candle.png");
    x.setAttribute("width", "35");
    x.setAttribute("height", "50");
    x.setAttribute("alt", "candle");
    cake.insertBefore(x,cake.firstElementChild);    
}



