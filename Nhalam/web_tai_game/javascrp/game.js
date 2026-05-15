
function downloadGame() {
    alert("Đang tải game...");
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
}
function addComment() {
    const input = document.getElementById("commentInput");
    const list = document.getElementById("commentsList");

    if (input.value.trim() === "") {
        alert("Vui lòng nhập nội dung bình luận!");
        return;
    }

    const newComment = `
<div class="comment-item">
    <div class="user-avatar" style="background: #888;">U</div>
    <div class="comment-content">
        <strong>Người dùng mới</strong>
        <p>${input.value}</p>
        <small>Vừa xong</small>
    </div>
</div>
`;

    list.insertAdjacentHTML('afterbegin', newComment);
    input.value = ""; // Xóa nội dung sau khi gửi
}
let currentSlide = 0;
let slides = [];

function showSlide(index) {
    if (!slides.length) return;

    // Loại bỏ class active ở ảnh hiện tại
    slides[currentSlide].classList.remove('active');

    // Tính toán index mới (vòng lặp)
    currentSlide = (index + slides.length) % slides.length;

    // Thêm class active cho ảnh tiếp theo
    slides[currentSlide].classList.add('active');
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}
// Tự động chuyển ảnh sau 3 giây
function initSlider() {
    slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    if (currentSlide === -1) currentSlide = 0;

    setInterval(() => {
        changeSlide(1);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', initSlider);
