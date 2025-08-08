

// Initialize Quill editor
var quill = new Quill('#editor-container', {
  theme: 'snow'
});

// Timer
let timeLeft = 10;
let timerDisplay = document.getElementById("time");

let countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    quill.setText(""); // clear the text
    alert("💨 Your notes have self-destructed!");
  }
}, 1000);
