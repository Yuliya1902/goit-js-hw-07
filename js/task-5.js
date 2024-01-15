
const btnChange = document.querySelector(".change-color")
const color = document.querySelector(".color")
btnChange.addEventListener('click', onBtnClick)
function onBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}
