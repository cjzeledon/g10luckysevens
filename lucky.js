function hideResults() {
  document.getElementById("results").style.visibility = "hidden";
}

function validated() {
  var bet = document.forms["gameForm"]["startingBet"].value;

  if (bet == "") {
    alert("Leaving it empty won't win you any money. Try again.");
    return false;
  } else if (bet == 0) {
    alert("Entering a zero will not win you any money. Defeats the purpose. Try again.");
    return false;
  } else {
    return true;
  }
}

function rollTheDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {

  if (validated()) {
    const startingBet = document.forms["gameForm"]["startingBet"].value;
    // Will turn the "string" startingBet to a number startingBet
    var money = parseInt(startingBet);
    const tallyMoney = [];
    // Add the startingBet to the beginning of array of tallyMoney
    // And will return a new length
    tallyMoney.unshift(money);

    while (money > 0) {
      var dice1 = rollTheDice();
      var dice2 = rollTheDice();
      var rolledDice = dice1 + dice2;

      if (rolledDice != 7) {
        money -= 1;
        tallyMoney.push(money);
      } else {
        money += 4;
        tallyMoney.push(money);
      }
    }

    // Keeps track of how many rolls were taken
    var tallyRolls = tallyMoney.length - 1;

    // Keeps track of the total amount of money held by the user
    const add = (a, b) => a + b;
    const sumofMoney = tallyMoney.reduce(add);

    // Keeps track of how many rolls were taken at the point when the user held the most money
    const heldMostMoney = Math.max.apply(null, tallyMoney);

    // Gets the index of the highest money held
    var getIndexOfTallyMoney = tallyMoney.indexOf(heldMostMoney);

    // If the highest amount held was the starting money, the roll count should be 0
    if (heldMostMoney == startingBet) {
      var rollCountToHighestAmountHeld = getIndexOfTallyMoney;
    } else {
      rollCountToHighestAmountHeld = getIndexOfTallyMoney + 1;
    }

    function showResults() {
      document.getElementById("results").style.visibility = "visible";
      document.getElementById("resultsStartingBet").textContent = "$" + startingBet;
      document.getElementById("resultsTotalRollBeforeBroke").textContent = tallyRolls;
      document.getElementById("resultsHighestAmountHeld").textContent = "$" + heldMostMoney;
      document.getElementById("resultsRollCountHighestAmountHeld").textContent = rollCountToHighestAmountHeld;
      document.getElementById("play").textContent = "Play Again";
      document.getElementById("play").type = "reset";
    }

    showResults();

    console.log("Starting Bet: " + startingBet);
    console.log("Current Bet: " + money);
    console.log("Array of All Money Held: " + tallyMoney);
    console.log("First dice is: " + dice1);
    console.log("Second dice is: " + dice2);
    console.log("Sum of rolled dice is: " + rolledDice);
    console.log("Total Rolls Before Going Broke: " + tallyRolls);
    console.log("Total Sum of Array of All Money Held: " + sumofMoney);
    console.log("Held Most Money: " + heldMostMoney);
    console.log("Index of Tally Money Array That Held Most Money: " + getIndexOfTallyMoney);
    console.log("Roll Count At Highest Amount Held: " + rollCountToHighestAmountHeld);
  }
}
