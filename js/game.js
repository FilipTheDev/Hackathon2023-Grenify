var coins = 0;
var co2 = 0;
var minutes = 0;
// const workAudio = new Audio('audio/Final.mp3');
// const levelUpAudio = new Audio('audio/levelUp.mp3');
setInterval(function() {
  minutes += 1;
}, 60000)
if(minutes >= 144) {
  if(co2 > 8899200) {
    alert("You lost the game, plant more trees and faster next time")
  } else {
    alert("Congratulations, you won! You reduced the yearly co2 in Macedonia, next mission is to try and reduce it even more")
  }
}

const chatP = document.getElementById("chatP");
function forNew() {
  if (coins < 280 * i) {
    alert(280 * i - coins + " Green coins left to buy a new flower.");
  }
  if (coins > 280 * i) {
    return false;
  }
}
const co2Interval = setInterval(function () {
  const co2p = document.getElementById("co2");
  co2 += 1030;
  co2p.innerHTML = `Co2: ${co2} <br>`;
  if (co2 > 8899200) {
    alert(
      "All you had to do is plant plants and now you lost, your planet is gone."
    );
    clearInterval(makingMoney);
    clearInterval(co2Interval);
  }
}, 1000);
//pari praenje
const makingMoney = setInterval(function () {
  const currentLevel = document.getElementById("level");
  const currentP = document.getElementById("current");
  const addPlant3 = document.getElementById("addPlant3");
  const addPlant2 = document.getElementById("addPlant2");
  // const chatP = document.getElementById("chatP");
  const plantPar1 = document.getElementById("plantPar1");
  const plantPar2 = document.getElementById("plantPar2");
  const plantPar3 = document.getElementById("plantPar3");

  coins += i + 1;
  if (y == 1) {
    coins += y - 1;
  }
  if (y > 1) {
    coins += y * 2;
  }
  currentP.innerHTML = `Green coins: ${coins} <br>`;
  // chatP.innerHTML = `${280 * i} Green coins needed for a new flower! <br>`;
  plantPar1.innerHTML = `${280 * i}`;

  if (i - 1 == 1) {
    currentLevel.innerHTML = `You have ${i - 1} flower`;
  }
  if (i - 1 > 1) {
    currentLevel.innerHTML = `You have ${i - 1} flowers`;
  }
  if (x - 1 == 1) {
    currentLevel.innerHTML += ` and ${x - 1} bush.`;
  }
  if (x - 1 > 1) {
    currentLevel.innerHTML += ` and ${x - 1} bushes.`;
  }

  if (y - 1 == 1) {
    currentLevel.innerHTML += ` and ${y - 1} little tree.`;
  }
  if (y - 1 > 1) {
    currentLevel.innerHTML += ` and ${y - 1} little trees.`;
  }

  if (i > 2) {
    coins += i * 2;
  }
  if (x > 1) {
    coins += x + 1;
  }
  if (addPlant2.style.display == "inline") {
    // chatP.innerHTML += `${420 * x} Green coins needed for a new Bush! <br>`;
    plantPar2.innerHTML = `${420 * x}`;
    
  }
  if (addPlant3.style.display == "inline") {
    plantPar3.innerHTML = `${680 * y}`;
  }
}, 600);
//cekan work
function workFunc() {
  const cleanImg = document.getElementById("cleanImg");
  //   workAudio.play();
  cleanImg.src = "Images/vacuumGif.gif";
  setInterval(function () {
    cleanImg.src = "Images/vacuum.png";
  }, 400);
  coins += 4;
  if (i != 1) {
    coins += i + 2;
    if (x != 0) {
      coins += x + 2;
    }
    if (y != 1) {
      coins += y + 2;
    }
  }
}
//flower
var i = 1;
function addPlant1() {
  const boughtCont = document.getElementById("boughtCont");
  const addPlant2 = document.getElementById("addPlant2");
  const chatP = document.getElementById("chatP");
  if (coins < 280 * i) {
    return false;
  }
  if (coins >= 280 * i) {
    //   levelUpAudio.play();
    coins = coins - 280 * i;
    i++;
    boughtCont.innerHTML +=
      '<img src="Images/plant1.png" id="newPlant1" alt="New Flower">';
  }
  if (i == 5) {
    addPlant2.style.display = "inline";
    alert("You can now buy a Bush. Every new Bush gives you more Green Coins"); // also might make it in chat bot
  }
}
//za nova kukja
var x = 1;
function addPlant2() {
  const addPlant3 = document.getElementById("addPlant3");
  const boughtCont = document.getElementById("boughtCont");
  const currentP = document.getElementById("current");
  if (coins < 420 * x) {
    return false;
  }
  if (coins >= 420 * x) {
    //   levelUpAudio.play();
    coins = coins - 420 * x;
    x++;
    boughtCont.innerHTML +=
      '<img src="Images/plant2.png" id="newPlant2" alt="New Bush">';
  }
  //za addBuiding
  if (x == 7) {
    alert(
      "You can now buy a little tree. Every new little tree gives you more Green Coins"
    );
    //   chatP.innerHTML += 'You can now buy a little tree. Every new little tree gives you more Green Coins';
    addPlant3.style.display = "inline";
  }
}
//za nova zgrada
var y = 1;
function addPlant3() {
  const boughtCont = document.getElementById("boughtCont");
  if (coins < 680 * y) {
    return false;
  }
  if (coins >= 680 * y) {
    //   levelUpAudio.play();
    coins = coins - 680 * y;
    y++;
    boughtCont.innerHTML +=
      '<img id="newPlant3" src="Images/plant3.png" alt="New little tree">';
  }
}

setInterval(() => {
  coins += 480;
}, 230000);
