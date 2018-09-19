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
    var money = parseInt(startingBet);
    const tallyMoney = [];

    // Testing these codes
    const tallyMoneyWon = [];
    const tallyMoneyLose = [];
    var totalRolls = 0;

    while (money > 0) {
      var dice1 = rollTheDice();
      var dice2 = rollTheDice();
      var rolledDice = dice1 + dice2;

      if (rolledDice != 7) {
        totalRolls++
        money -= 1;
        tallyMoney.push(money);
        tallyMoneyLose.push(money);
      } else {
        totalRolls++
        money += 4;
        tallyMoney.push(money);
        tallyMoneyWon.push(money);
      }
    }

    // Keeps track of how many rolls were taken
    var tallyRolls = tallyMoney.length;

    // Keeps track of the maximum amount of money held by the user
    const add = (a, b) => a + b;
    const sumofMoney = tallyMoney.reduce(add);

    // Keeps track of how many rolls were taken at the point when the user held the most money
    const heldMostMoney = Math.max.apply(null, tallyMoney);
    var getIndexOfTallyMoney = tallyMoney.indexOf(heldMostMoney);
    var rollCountToHighestAmount = getIndexOfTallyMoney + 1;

    console.log("Starting Bet: " + startingBet);
    console.log("Current Bet: " + money);
    console.log("Array of All Money Held: " + tallyMoney);
    console.log("Array of Money Won: " + tallyMoneyWon);
    console.log("Array of Money Lost: " + tallyMoneyLose);
    console.log("First dice is: " + dice1);
    console.log("Second dice is: " + dice2);
    console.log("Sum of rolled dice is: " + rolledDice);
    console.log("Total Rolls Before Going Broke: " + tallyRolls);
    console.log("Highest Amount Won: " + sumofMoney);
    console.log("Held Most Money: " + heldMostMoney);
    console.log("Index of Tally Money Array That Held Most Money: " + getIndexOfTallyMoney);
    console.log("Roll Count At Highest Amount Won: " + rollCountToHighestAmount);
    console.log("Total Rolls: " + totalRolls);

    function showResults() {
      document.getElementById("results").style.visibility = "visible";
      document.getElementById("resultsStartingBet").textContent = "$" + startingBet;
      document.getElementById("resultsTotalRollBeforeBroke").textContent = tallyRolls;
      document.getElementById("resultsHighestAmountWon").textContent = "$" + heldMostMoney;
      document.getElementById("resultsRollCountHighestAmountWon").textContent = rollCountToHighestAmount;

      // Change to calling the element tag instead of its Id since it "should" only be called on once, not twice
      document.getElementById("play").textContent = "Play Again";
      document.getElementById("play").type = "reset";
    }
    showResults();
  }
}
