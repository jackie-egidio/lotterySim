function makePage() {
    array1 = Array();
    array2 = Array();

    array1 = makePickArray();
    array2 = makeWinArray();

    compareArrays(array1, array2);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function makePickArray() {
    document.write("My picks: ");
    lottoNums = Array();
    for (let i = 0; i < 5; i++) {
        var num = getRandomInt(48) + 1;
        lottoNums.push(num);
        document.write(num + " ");
    }

    var magic = getRandomInt(18) + 1;
    document.write("<br />Lucky ball value: " + magic);

    sortNum = function(a, b) {
        return a - b;
    }
    lottoNums.sort(sortNum);
    document.write("<br />My pick sorted: ");
    lottoNums.forEach(print);
    lottoNums.push(magic);
    document.write("<br />Lucky ball value: " + magic);

    return lottoNums;
}

function print(num) {
    document.write(num + " ");
}

function makeWinArray() {
    winner = Array();

    winner.push(12);
    winner.push(15);
    winner.push(24);
    winner.push(35);
    winner.push(48);

    document.write("<br />Winning numbers: ");
    winner.forEach(print);
    winner.push(3);
    document.write("<br />Winning lucky number: 3");

    return winner;
}

function compareArrays(pickArray, winArray) {
    var luckyWon = false;
    var numWon = 0;

    if (pickArray.includes(12)) numWon++;
    else if (pickArray.includes(15)) numWon++;
    else if (pickArray.includes(24)) numWon++;
    else if (pickArray.includes(34)) numWon++;
    else if (pickArray.includes(48)) numWon++;
    document.write("<br />Number of wining numbers: " + numWon);

    if (pickArray.at(5) == winArray.at(5)) luckyWon = true;
    
    if (luckyWon) {
        document.write("<br />Your lucky ball matched!<br />");
    } else {
        document.write("<br />Your lucky ball didn't match.<br />");
    }

    payout(numWon, luckyWon);
}

function payout(numWon, luckyWon) {
    if (numWon == 0 && luckyWon == true) {
        document.write("You won $4!");
    } else if (numWon == 1 && luckyWon == true) {
        document.write("You won $6!");
    } else if (numWon == 2 && luckyWon == true) {
        document.write("You won $25!");
    } else if (numWon == 2) {
        document.write("You won $3!");
    } else if (numWon == 3 && luckyWon == true) {
        document.write("You won $150!");
    } else if (numWon == 3) {
        document.write("You won $20!");
    } else if (numWon == 4 && luckyWon == true) {
        document.write("You won $1500!");
    } else if (numWon == 4) {
        document.write("You won $200!");
    } else if (numWon == 5 && luckyWon == true) {
        document.write("You won $7,000 a WEEK for LIFE!");
    } else if (numWon == 5) {
        document.write("You won $25,000 a YEAR for LIFE!");
    } else {
        document.write("I'm sorry, you didn't win anything.");
    }
}
