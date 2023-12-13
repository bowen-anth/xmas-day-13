const numGuests = document.querySelector('#num-input')
const btn = document.querySelector('#btn')
const vegCheckbox = document.querySelector('#vegetarian-input')
const mealIs = document.querySelector('#food')

btn.addEventListener("click", dinnerFunc)

function dinnerFunc() {
  if (!vegCheckbox.checked && numGuests.value <= 4) {
    mealIs.textContent = "Ham"
  } else if (!vegCheckbox.checked && numGuests.value >= 5) {
  mealIs.textContent = "Turkey"
} else if (vegCheckbox.checked && numGuests.value <= 4) {
  mealIs.textContent = "Harmless Ham"
} else {
  mealIs.textContent = "Tofurkey"
  }
}