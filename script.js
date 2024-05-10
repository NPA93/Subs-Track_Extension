function createNewDiv() {
  // Create a new div element
  const newDiv = document.createElement("div");

  // Create a new paragraph element
  const newParagraph = document.createElement("p");

  // Get the input element
  const input = document.querySelector(".input_text");

  // Set the content of the paragraph to the input value
  newParagraph.textContent = input.value;

  // Append the paragraph to the div
  newDiv.appendChild(newParagraph);

  // Get the section element
  const section = document.querySelector(".section");

  // Append the new div to the section
  section.appendChild(newDiv);

  // Clean the input value
  input.value = "";
}

// Get the button element
const button = document.querySelector(".magic-button");



