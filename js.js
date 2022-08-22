// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent =
//   'Yahoo!!! You guesting a number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 11;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No number section
  if (!guess) {
    console.log(
      (document.querySelector(".message").textContent = "There is no number")
    );

    // Player guesses the number
  } else if (guess == number) {
    document.querySelector("body").style.backgroundColor = "#298089";
    document.querySelector(".message").textContent = "You got a number";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = number;

    //Set high score
    document.querySelector(".label-highscore").textContent = score;

    //Player guesses too low number
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector("body").style.backgroundColor = "#DD5A14";
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Lost";
      document.querySelector(".score").textContent = 0;
    }

    //Player guesses too high number
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector("body").style.backgroundColor = "#DD5A14";
      document.querySelector(".message").textContent = "Too hight";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Run again";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
