document.getElementById("RockBtn").addEventListener("click", rpsRock);
function rpsRock(){
var computer = Math.floor((Math.random() * 3)+1);
if ((computer === 1)) {
 var choice = "rock";
} else if ((computer === 2)) {
 var choice = "paper";
} else if ((computer === 3)) {
 var choice = "scissors";
} else {
  console.log("Uhhh... something went wrong");
}

console.log(`computer: ${choice}`)

var human = "rock"


console.log(`You: ${human}`)

if (human === choice) {
    var outcome = "draw"
    console.log("A draw? That sucks")
} else if (((human === "rock") && (choice === "scissors")) || ((human === "paper") && (choice=== "rock")) || ((human === "scissors") && (choice ==="paper"))) {
    var outcome = "win"
    console.log("You won? Lucky shot I guess")
} else {
    var outcome = "lose"
    console.log("Ha, you suck! That's a loss")
}

console.log(outcome)
document.getElementById("outcome").innerHTML = (`The computer chose ${choice} so it looks like you ${outcome}!`)

if (outcome === "win") {
    document.getElementById("taunt").innerHTML = ("You won't be so lucky next time, punk")
} else if (outcome === "lose") {
    document.getElementById("taunt").innerHTML = ("Come on, this is child's play")
} else {
    document.getElementById("taunt").innerHTML = ("That's no fun, try to lose next time!")
}
}
//Paper
document.getElementById("PaperBtn").addEventListener("click", rpsPaper);
function rpsPaper(){
var computer = Math.floor((Math.random() * 3)+1);
if ((computer === 1)) {
 var choice = "rock";
} else if ((computer === 2)) {
 var choice = "paper";
} else if ((computer === 3)) {
 var choice = "scissors";
} else {
  console.log("Uhhh... something went wrong");
}

console.log(`computer: ${choice}`)

var human = "paper"


console.log(`You: ${human}`)

if (human === choice) {
    var outcome = "draw"
    console.log("A draw? That sucks")
} else if (((human === "rock") && (choice === "scissors")) || ((human === "paper") && (choice=== "rock")) || ((human === "scissors") && (choice ==="paper"))) {
    var outcome = "win"
    console.log("You won? Lucky shot I guess")
} else {
    var outcome = "lose"
    console.log("Ha, you suck! That's a loss")
}

console.log(outcome)
document.getElementById("outcome").innerHTML = (`The computer chose ${choice} so it looks like you ${outcome}!`)

if (outcome === "win") {
    document.getElementById("taunt").innerHTML = ("You won't be so lucky next time, punk")
} else if (outcome === "lose") {
    document.getElementById("taunt").innerHTML = ("Come on, this is child's play")
} else {
    document.getElementById("taunt").innerHTML = ("That's no fun, try to lose next time!")
}
}
//Scissors
document.getElementById("ScissorsBtn").addEventListener("click", rpsScissors);
function rpsScissors(){
var computer = Math.floor((Math.random() * 3)+1);
if ((computer === 1)) {
 var choice = "rock";
} else if ((computer === 2)) {
 var choice = "paper";
} else if ((computer === 3)) {
 var choice = "scissors";
} else {
  console.log("Uhhh... something went wrong");
}

console.log(`computer: ${choice}`)

var human = "scissors"


console.log(`You: ${human}`)

if (human === choice) {
    var outcome = "draw"
    console.log("A draw? That sucks")
} else if (((human === "rock") && (choice === "scissors")) || ((human === "paper") && (choice=== "rock")) || ((human === "scissors") && (choice ==="paper"))) {
    var outcome = "win"
    console.log("You won? Lucky shot I guess")
} else {
    var outcome = "lose"
    console.log("Ha, you suck! That's a loss")
}

console.log(outcome)
document.getElementById("outcome").innerHTML = (`The computer chose ${choice} so it looks like you ${outcome}!`)

if (outcome === "win") {
    document.getElementById("taunt").innerHTML = ("You won't be so lucky next time, punk")
} else if (outcome === "lose") {
    document.getElementById("taunt").innerHTML = ("Come on, this is child's play")
} else {
    document.getElementById("taunt").innerHTML = ("That's no fun, try to lose next time!")
}
}