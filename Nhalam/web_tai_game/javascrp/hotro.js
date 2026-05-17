function toggleFAQ(element) {
    const answer = element.querySelector('p');
    const icon = element.querySelector('h3 span');
    if (!answer || !icon) return;

    const isOpen = element.classList.toggle('active');
    answer.style.display = isOpen ? 'block' : 'none';
    icon.textContent = isOpen ? '−' : '+';
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-item').forEach(item => {
        const answer = item.querySelector('p');
        const icon = item.querySelector('h3 span');
        if (answer) {
            answer.style.display = 'none';
        }
        if (icon) {
            icon.textContent = '+';
        }
    });

    const form = document.getElementById('supportForm');
    const responseMessage = document.getElementById('responseMessage');

    if (form && responseMessage) {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const email = form.querySelector('#email').value.trim();
            const issue = form.querySelector('#issue').value;
            const messageText = form.querySelector('#messageText').value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                responseMessage.textContent = 'Email không hợp lệ. Vui lòng nhập đúng định dạng email.';
                responseMessage.style.color = '#ff6b6b';
                return;
            }

            if (!issue) {
                responseMessage.textContent = 'Vui lòng chọn loại vấn đề trong menu để gửi yêu cầu.';
                responseMessage.style.color = '#ff6b6b';
                return;
            }

            if (!messageText) {
                responseMessage.textContent = 'Vui lòng mô tả chi tiết lỗi hoặc vấn đề của game.';
                responseMessage.style.color = '#ff6b6b';
                return;
            }

            responseMessage.textContent = 'Yêu cầu hỗ trợ đã được gửi. Admin sẽ liên hệ lại bạn sớm.';
            responseMessage.style.color = '#7ef1a5';
            form.reset();
        });
    }
});
