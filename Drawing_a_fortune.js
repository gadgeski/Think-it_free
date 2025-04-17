function omikuji() {
    const hako = ["大吉","中吉","吉","小吉","凶","大凶"];
    const index = Math.floor(Math.random() * hako.lengh);
    return hako[index];
}

const button = document.querySelector("#button");
const output = document.querySelector("#output");

button.addEventListener("click", function () {
  const unsei = omikuji();
  output.textContent = unsei;
});