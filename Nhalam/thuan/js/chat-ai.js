function toggleChat() {
    const chat = document.getElementById('chatWidget');
    const icon = document.getElementById('chatIcon');
    const isOpen = chat.classList.toggle('show');
    icon.classList.toggle('hide', isOpen);
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const message = input.value.trim();
    if (!message) return;

    messages.innerHTML += `<p><strong>Bạn:</strong> ${message}</p>`;
    input.value = '';
     setTimeout(() => {
        const response = 'Cảm ơn bạn đã nhắn tin. Hệ thống đang ghi nhận lỗi! 🛠️';
        messages.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && document.activeElement.id === 'chatInput') {
        sendMessage();
    }
});
