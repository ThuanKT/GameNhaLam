// Hàm kiểm tra trường bỏ trống
function validateNotEmpty(value, fieldName) {
    if (!value.trim()) {
        alert(`Lỗi: ${fieldName} không được bỏ trống!`);
        return false;
    }
    return true;
}

// Xử lý form khi submit
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn form submit mặc định
            
            // Lấy giá trị từ các input
            const username = document.getElementById('u').value;
            const password = document.getElementById('p').value;
            
            // Kiểm tra các trường bỏ trống
            if (!validateNotEmpty(username, "Tên đăng nhập")) return false;
            if (!validateNotEmpty(password, "Mật khẩu")) return false;
            
            // Lấy dữ liệu tài khoản từ localStorage
            const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
            
            // Kiểm tra xem tài khoản có tồn tại không
            const user = accounts.find(acc => acc.username === username && acc.password === password);
            
            if (!user) {
                alert("Lỗi: Tên đăng nhập hoặc mật khẩu không đúng!");
                return false;
            }
            
            // Lưu thông tin người dùng hiện tại
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            alert("Đăng nhập thành công!");
            // Sau đó mới cho redirect đến trang web tải game
            window.location.href = '../../thuan/html/index2.html';//trang chu
            return false;
        });
    }
});
