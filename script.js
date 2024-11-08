let count = 0;

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  count--;
  updateCounter();
}

function updateCounter() {
  document.getElementById("counter").innerText = count;
}
