// Module Exam 3 

//Global Variable
var cash = 5000;


//Event Listeners
document.getElementById("play-btn").addEventListener("click", roll);
document.getElementById("purchase-btn").addEventListener("click", luxury);


//Functions

function roll() {
    let bet = Number(document.getElementById("bet-input").value);

    let houseroll = Math.floor(Math.random() * 6) + 1;
    let playerroll = Math.floor(Math.random() * 3) + 4;



    document.getElementById("house-die").src = "images/" + houseroll + ".png";
    document.getElementById("player-die").src = "images/" + playerroll + ".png";

    if (playerroll > houseroll) {
        cash += bet;
    } else if (houseroll > playerroll) {
        cash -= bet;
    } else {
        cash += 0;
    }

    document.getElementById("funds").innerHTML = cash;
}

function luxury() {

    var randomrich = Math.random();

    if (cash < 1000 && cash > 0) {
        document.getElementById("loot").innerHTML += '<img src ="images/socks.png">';
        alert ("Get more money! You are broke! You are only gonna win used socks!");
    } else if (cash >= 1000 && cash <= 5000) {
        if (randomrich < 0.33) {
            document.getElementById("loot").innerHTML += '<img src ="images/ring.png">';
        } else if (randomrich < 0.66) {
            document.getElementById("loot").innerHTML += '<img src ="images/bike.jpg">';
        } else {
            document.getElementById("loot").innerHTML += '<img src ="images/trip.jpg">';
        }
        cash -= 1000

    } else if (cash > 5000) {
        if (randomrich < 0.25) {
            document.getElementById("loot").innerHTML += '<img src ="images/motorcycle.jpg">';
        } else if (randomrich < 0.5) {
            document.getElementById("loot").innerHTML += '<img src ="images/house.png">';
        } else if (randomrich < 0.75) {
            document.getElementById("loot").innerHTML += '<img src ="images/car.png">';
        } else {
            document.getElementById("loot").innerHTML += '<img src ="images/boat.png">';
        }
        cash -= 1000
    }
    document.getElementById("funds").innerHTML = cash;
}