const quotes = [
  "Believe in yourself and all that you are.",
  "You are stronger than you think.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it."
];

let currentQuoteIndex = -1;
const quoteBox = document.getElementById('quoteBox');

function showNextQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === currentQuoteIndex);
  currentQuoteIndex = newIndex;
  quoteBox.style.opacity = 0;
  setTimeout(() => {
    quoteBox.textContent = quotes[currentQuoteIndex];
    quoteBox.style.opacity = 1;
  }, 300);
}

window.onload = showNextQuote;
