let computerChoices = ["rock", "paper", "scissor"];
let computerChoice;
let userChoice;
let myScore=0;
let computerScore=0;
document.getElementById("pickRock").addEventListener("click", () => {
  userChoice = "rock";
  afterUserChoice();
});
document.getElementById("pickPaper").addEventListener("click", () => {
  userChoice = "paper";
  afterUserChoice();
});
document.getElementById("pickScissor").addEventListener("click", () => {
  userChoice = "scissor";
  afterUserChoice();
});
function afterUserChoice() {
  document.getElementById("userChoice").style.display = "none";
  document.querySelector(".next").style.display = "flex";
  computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  imageChange(computerChoice);
  checkWinner(compareThem());
}
function imageChange(a) {
  if (a == "paper") {
    document.getElementById("ai").src = "./Assets/paper.jpg";
  } else if (a == "scissor") {
    document.getElementById("ai").src = "./Assets/scissor.jpg";
  } else if (a == "rock") {
    document.getElementById("ai").src = "./Assets/rock.jpg";
  }
}
function compareThem() {
  if (computerChoice == userChoice) {
    return 2;
  } else if (computerChoice == "rock" && userChoice == "scissor") {
    return 0;
  } else if (computerChoice == "rock" && userChoice == "paper") {
    return 1;
  } else if (computerChoice == "paper" && userChoice == "rock") {
    return 0;
  } else if (computerChoice == "paper" && userChoice == "scissor") {
    return 1;
  } else if (computerChoice == "scissor" && userChoice == "paper") {
    return 0;
  } else if (computerChoice == "scissor" && userChoice == "rock") {
    return 1;
  }
}
function checkWinner(x) {
  if (x == 2) {
    document.getElementById("nameDec").style.color = "#00008B";
    document.getElementById("nameDec").textContent = "NONE(draw)";
  } else if (x == 1) {
    document.getElementById("nameDec").style.color = "#90EE90";
    document.getElementById("nameDec").textContent = "YOU";
    myScore++;
    updateScore(myScore,".myScore" ,"You");
  } else if (x == 0) {
    document.getElementById("nameDec").style.color = "purple";
    document.getElementById("nameDec").textContent = "COMPUTER";
    computerScore++;
    updateScore(computerScore,".computerScore","Bot");
  }
}
function updateScore(x,y,z){
  x=x<10?`0${x}`:x;
  document.querySelector(y).innerHTML=`${z} :${x}`;
}
document.getElementById("replayButton").addEventListener("click", () => {
  document.getElementById("userChoice").style.display = "flex";
  document.querySelector(".next").style.display = "none";
});
document.getElementById("resetBtn").addEventListener("click", () => {
  location.reload();
});
