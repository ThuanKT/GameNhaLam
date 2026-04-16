// Hàm hiển thị Profile và ẩn nút Đăng nhập
function showProfile(username) {
    const loginBtn = document.getElementById("loginBtn");
    const userProfile = document.getElementById("userProfile");
    const helloUser = document.getElementById("helloUser"); // Nếu bạn có thẻ hiện tên

    if (loginBtn) loginBtn.style.display = "none";
    if (userProfile) {
        userProfile.style.display = "inline-block";
        if (helloUser) helloUser.innerText = "Chào, " + username;
    }
}

// 1. Kiểm tra trạng thái ngay khi trang web tải xong
window.addEventListener('load', () => {
    const loggedInUser = sessionStorage.getItem('userLoggedIn');
    if (loggedInUser) {
        showProfile(loggedInUser);
    }
});

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