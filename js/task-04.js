let counterValue = 0;

const root = document.getElementById("counter");
const spanCounter = document.getElementById("value");
const decrementBtn = root.querySelector('button[data-action="decrement"]');
const incrementBtn = root.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);

function decrementValue() {
    counterValue -= 1;
    renderScreeen(counterValue);
}

function incrementValue() {
    counterValue += 1;
    renderScreeen(counterValue);
}

function renderScreeen(value) {
    spanCounter.textContent = value;
}