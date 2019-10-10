$(document).ready(function(){


let gem1 = Math.floor(Math.random()*15 + 1);
console.log(gem1)

let gem2 = Math.floor(Math.random()*10 +1);
console.log(gem2)

let gem3 = Math.floor(Math.random()*15 + 5);
console.log(gem3)

let egg = Math.floor(Math.random()*20 + 10);
console.log(egg)

let userNum = 0;

let wins = 0;

let loss = 0;

$("#wins").html("You won: " + wins);
$("#loss").html("You lost: " + loss);



function setup() {
    let computerNum = Math.floor(Math.random()*100 + 50);
    $("#goalNumber").html("Your gem goal: " + computerNum);


}

function winner() {
    if(userNum === computerNum){
        wins++;
        $("#wins").html(wins);
        setup();
    }

}

function loser() {
    if (userNum > computerNum) {
        loss++;
        $("#loss").html(loss);
        setup();
    }
}




setup()





})