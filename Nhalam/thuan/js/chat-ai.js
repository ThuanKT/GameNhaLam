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
        const responses = [
            'Wow, game đó hay quá! Tôi cũng thích chơi đấy! 🎮',
            'Bạn đã thử game mới chưa? PUBG hay Free Fire? 🔥',
            'Tips cho bạn: Luôn farm trước khi fight! 💪',
            'LOL, câu hỏi hay đấy! Tôi nghĩ game đó xứng đáng 10/10 ⭐',
            'Bạn thích thể loại gì? FPS hay RPG? 🤔',
            'GG! Game quá mượt mà! 🚀',
            'Bạn chơi rank gì vậy? Tôi thì Diamond đấy! 💎',
            'Haha, bug game hay ho quá! 😂',
            'Bạn có team không? Tìm teammate đi! 👥',
            'Chúc bạn win streak nhé! Good luck! 🍀'
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        messages.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && document.activeElement.id === 'chatInput') {
        sendMessage();
    }
});
