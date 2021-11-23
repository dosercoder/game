/*using your knowledge so far, build a game of Rock/Paper/Scissor 
where through the use of the prompt function, 
a user can enter their choice and based on a random selection 
- they can either tie/win or lose against a computer. */

//3 options each=9 COMBOS
/*
p1-p2 
RR  tie
RP  lose    
RS  win ---> 3 outcomes
SR
SP
SS
PR
PP
PS
*/


function game(){
    let P1,P2;

    P2 =(function() {  
        x=Math.random();
    
        if(x<=0.33) {
            return "rock"
        } else if(x>0.33&&x<=0.66) {
            return "paper"
        } else if(x>0.66&&x<1) {
            return "scissors"
        }
    })();

    P1 = prompt("rock, paper, scissors?").toLowerCase;
    
    let result = (function(P1,P2) {
        if(P1==P2) {
            return "tie"
        } else if(P1=="rock"&&P2=="paper") {
            return "lose"
        } else if(P1=="rock"&&P2=="scissors") {
            return "win"
        } else if(P1=="paper"&&P2=="rock") {
            return "win"
        } else if(P1=="paper"&&P2=="scissors") {
            return "lose"
        } else if(P1=="scissors"&&P2=="rock") {
            return "lose"
        } else if(P1=="scissors"&&P2=="paper") {
            return "win"
        } 
    })();

    let resultScreen=document.getElementById("result_screen");

    resultScreen.innerHTML += result;


};