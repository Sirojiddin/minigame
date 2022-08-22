// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent =
//   'Yahoo!!! You guesting a number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 11;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector(".message").textContent = "There is no number")
    );
  } else if (guess == number) {
    document.querySelector(".message").textContent = "You got a number";
  } else if (guess != number) {
    document.querySelector(".message").textContent = "Try again";
  }
});
