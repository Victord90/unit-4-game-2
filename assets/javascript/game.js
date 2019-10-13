$(document).ready(function(){

let computerNum = Math.floor(Math.random()*100 + 50);

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

let gemTotal = userNum + gem1 + gem2 + gem3 + egg;

$("#wins").html("You won: " + wins);
$("#loss").html("You lost: " + loss);



function setup() {
    let computerNum = Math.floor(Math.random()*100 + 50);
    console.log(computerNum)
    $("#goalNumber").html("Your gem goal: " + computerNum);
    userNum = 0;
}

function winner() {
   
    wins++;
    $("#wins").html("You won: " + wins)
    setup();


}

function loser() {

    loss++;
    $("#loss").html("You lost: " + loss);
    setup();

}



$("#gem1").on("click", function(){
    userNum = userNum + gem1;
    $("#gemTotal").html("You collected: " + userNum);
    if (userNum === computerNum){
        winner();
    }else if(userNum > computerNum){
        loser();
    }

})

$("#gem2").on("click", function(){
    userNum = userNum + gem2;
    $("#gemTotal").html("You collected: " + userNum);
    if (userNum === computerNum){
        winner();
    }else if(userNum > computerNum){
        loser();
    }

})

$("#gem3").on("click", function(){
    userNum = userNum + gem3;
    $("#gemTotal").html("You collected: " + userNum);
    if (userNum === computerNum){
        winner();
    }else if(userNum > computerNum){
        loser();
    }

})

$("#egg1").on("click", function(){
    userNum = userNum + egg;
    $("#gemTotal").html("You collected: " + userNum);
    if (userNum === computerNum){
        winner();
    }else if(userNum > computerNum){
        loser();
    }

})



setup()





})