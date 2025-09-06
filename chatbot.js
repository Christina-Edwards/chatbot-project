function setText(id, message) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = message;
  } else {
    console.error(`Element with ID "${id}" not found.`);
    
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("sendBtn");
  button.addEventListener("click", function () {
    const input = document.getElementById("userPrompt");
    const message = input.value;
    setText("chatOutput", message);
    getValue("userPrompt", message);
    console.log("Button clicked, message set.");
  });
});
  
