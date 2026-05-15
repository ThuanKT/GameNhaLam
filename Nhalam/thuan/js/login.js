

// 2. Xử lý click vào Avatar để hiện Dropdown
document.getElementById("userProfile")?.addEventListener("click", function(e) {
    const dropdown = document.querySelector(".user-dropdown");
    if (dropdown) {
        dropdown.classList.toggle("active"); // Hoặc "show-dropdown" tùy CSS của bạn
    }
    e.stopPropagation();
});

// 3. Đăng xuất
function logout() {
    sessionStorage.removeItem('userLoggedIn');
    window.location.reload(); // Tải lại trang để hiện lại nút Đăng nhập
}

// 4. Click ra ngoài để đóng menu
window.onclick = function() {
    const dropdown = document.querySelector(".user-dropdown");
    if (dropdown) dropdown.classList.remove("active");
};