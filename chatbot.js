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
  const input = document.getElementById("userPrompt");

  button.addEventListener("click", function () {
    const message = input.value;
    document.getElementById("chatOutput").textContent = message;
  });
});
