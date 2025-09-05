function setText(id, message) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = message;
  } else {
    console.error(`Element with ID "${id}" not found.`);
  }
}
setText('status', 'Chatbot is ready!');
setText('chatOutput', 'Hello!');