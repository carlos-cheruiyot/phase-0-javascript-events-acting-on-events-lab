// Get the dodger element
const dodger = document.getElementById('dodger');

// Move the dodger left
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left) || 0;
  
  // Prevent moving if the dodger is at the far left
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Move the dodger right
function moveDodgerRight() {
  const left = parseInt(dodger.style.left) || 0;
  const gameWidth = document.getElementById('game').offsetWidth;
  const dodgerWidth = dodger.offsetWidth;

  // Prevent moving if the dodger reaches the right edge of the game field
  if (left + dodgerWidth < gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}



