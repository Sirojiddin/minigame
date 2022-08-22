// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent =
//   'Yahoo!!! You guesting a number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 11;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    console.log(
      (document.querySelector(".message").textContent = "There is no number")
    );
  } else if (guess == number) {
    document.querySelector(".message").textContent = "You got a number";
    score++;
    document.querySelector(".score").textContent = score;
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too hight";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});
