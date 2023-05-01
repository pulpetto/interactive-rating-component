const part1 = document.querySelector(".rating");
const part2 = document.querySelector(".after");
const submit = document.querySelector(".rating__submit");
const score = document.querySelector(".after__thx--score");

const options = document.querySelectorAll(".rating__list--btn");

let scoreVal = 0;

options.forEach((option) =>
    option.addEventListener("click", function () {
        scoreVal = option.textContent;
    })
);

submit.addEventListener("click", function () {
    if (scoreVal === 0) return alert("pls select from 1-5");

    part1.style.display = "none";
    part2.style.display = "block";

    score.innerText = scoreVal;
});
