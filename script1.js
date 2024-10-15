// Get the elements
const steps = document.querySelectorAll("#steps li");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

let currentStep = -1; // Start at -1 to handle "Start Cooking"

// Start Cooking button event
startBtn.addEventListener("click", function() {
  currentStep = 0; // Set to the first step
  highlightStep(currentStep);  // Highlight the first step
  nextBtn.disabled = false;    // Enable Next button
  startBtn.disabled = true;    // Disable Start button
});

// Next button event
nextBtn.addEventListener("click", function() {
  if (currentStep < steps.length - 1) {
    removeHighlight(currentStep); // Remove highlight from the current step
    currentStep++;                // Move to the next step
    highlightStep(currentStep);   // Highlight the next step
  }

  if (currentStep === steps.length - 1) {
    nextBtn.disabled = true; // Disable Next button after the last step
  }
});

// Function to highlight a step
function highlightStep(index) {
  steps[index].classList.add("highlight");
}

// Function to remove highlight from a step
function removeHighlight(index) {
  steps[index].classList.remove("highlight");
}
