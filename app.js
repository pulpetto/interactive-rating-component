const part1 = document.querySelector(".rating");
const part2 = document.querySelector(".after");
const submit = document.querySelector(".rating__submit");

submit.addEventListener("click", function () {
    part1.style.display = "none";
    part2.style.display = "block";
});
