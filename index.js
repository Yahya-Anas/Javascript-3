const gameArray = ["Rock", "Paper", "Scissors"];
function computerPlayer() {
  return Math.floor(Math.random() * gameArray.length);
}

function printResult(player, computer, result) {
  if (result.score === "player") {
    console.log(`You win! ${player} beats ${computer} `);
  } else if (result.score === "computer") {
    console.log(`You lose! ${computer} beats ${player} `);
  } else if (result.score === "equal") {
    console.log("No one win!");
  } else {
    console.log("wrong input!");
  }
}
function playRound(player, computer) {
  const textRock = "rock";
  const textPaper = "paper";
  const textScissors = "scissors";
  if (player == computer) {
    return { score: "equal" };
  }
  if (player == textRock && computer == textPaper) {
    return { score: "computer" };
  }
  if (player == textRock && computer == textScissors) {
    return { score: "player" };
  }
  if (player == textPaper && computer == textRock) {
    return { score: "player" };
  }
  if (player == textPaper && computer == textScissors) {
    return { score: "computer" };
  }
  if (player == textScissors && computer == textRock) {
    return { score: "computer" };
  }
  if (player == textScissors && computer == textPaper) {
    return { score: "player" };
  }

  return { score: null };
}

function singleRound() {
  const player = "paper";
  const computer = gameArray[computerPlayer()].toLowerCase();
  console.log({ computer: computer, player: player });
  const result = playRound(player, computer);
  printResult(player, computer, result);
}

function game() {
  const score = { computer: 0, player: 0 };

  for (let i = 0; i < 5; i++) {
    const computer = gameArray[computerPlayer()].toLowerCase();
    const player = prompt("write any thing").toLowerCase();
    const result = playRound(player, computer);
    console.log({ computer: computer, player: player });
    if (result.score) {
      score[result.score]++;
    }
    printResult(player, computer, result);
  }
  console.log("The Computer:" + score.computer);
  console.log("The Player:" + score.player);
  if (score.computer > score.player) {
    console.log("The Winner is The Computer!");
  } else if (score.player > score.computer) {
    console.log("The Winner is The Player!");
  } else {
    console.log("No Winner!");
  }
}
singleRound();
game();
// let player = "rock";
// let computer = "paper";
// const x = {
//   rock_paper: "You lose!Paper beats Rock  ",
//   paper_rock: "You win!Paper beats Rock  ",

// };

// x[player+"_"+computer]
// x[player+"_"+computer]
