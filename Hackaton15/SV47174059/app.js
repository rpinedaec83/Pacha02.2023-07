const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');

function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== '') {
    const messageElement = document.createElement('div');
    messageElement.className = 'mb-2';
    messageElement.innerText = `Tú: ${message}`;
    chatContainer.appendChild(messageElement);
    messageInput.value = '';
    // Aquí puedes enviar el mensaje al servidor usando WebSocket o cualquier otra tecnología que prefieras.
  }
}
