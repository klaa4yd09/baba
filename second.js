// Get elements by ID
const typingElement = document.getElementById("typingText");
const buttonElement = document.getElementById("actionButton");

// Function to run and start the animation logic
function initAnimation() {
  // Check if the elements exist before running (good practice)
  if (!typingElement || !buttonElement) return;

  // Initially, set the typing text to be invisible
  typingElement.style.opacity = 0;

  // Wait 500ms before starting the animation (a subtle delay)
  setTimeout(() => {
    typingElement.style.opacity = 1; // Make the text container visible
    // CSS animation takes over here
  }, 500);
}

// Add an event listener to the button to improve UX
buttonElement.addEventListener("click", function (event) {
  // Instantly stop the animation if the user clicks the button before it finishes
  typingElement.style.animation = "none";
  // Ensure the full text is shown immediately
  typingElement.style.width = "27ch";
  // Hide the blinking cursor
  typingElement.style.borderRight = "none";
});

// Start the animation once the script runs (which is after the DOM is loaded since the script is at the end of <body>)
initAnimation();
