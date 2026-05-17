// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm kiểm tra trường bỏ trống
function validateNotEmpty(value, fieldName) {
    if (!value.trim()) {
        alert(`Lỗi: ${fieldName} không được bỏ trống!`);
        return false;
    }
    return true;
}

// Hàm kiểm tra mật khẩu khớp
function validatePasswordMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
        alert("Lỗi: Mật khẩu nhập lại không khớp!");
        return false;
    }
    return true;
}

// Hàm kiểm tra mật khẩu hợp lệ
function validatePassword(password) {
    if (password.length < 6) {
        alert("Lỗi: Mật khẩu phải có ít nhất 6 ký tự!");
        return false;
    }
    return true;
}

// Xử lý form khi submit
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn form submit mặc định
            
            // Lấy giá trị từ các input
            const username = document.getElementById('reg-user').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-pass').value;
            const confirmPassword = document.getElementById('re-pass').value;
            
            // Kiểm tra các trường bỏ trống
            if (!validateNotEmpty(username, "Tên đăng nhập")) return false;
            if (!validateNotEmpty(email, "Email")) return false;
            if (!validateNotEmpty(password, "Mật khẩu")) return false;
            if (!validateNotEmpty(confirmPassword, "Xác nhận mật khẩu")) return false;
            
            // Kiểm tra định dạng email
            if (!validateEmail(email)) {
                alert("Lỗi: Email không hợp lệ!");
                return false;
            }
            
            // Kiểm tra độ dài mật khẩu
            if (!validatePassword(password)) return false;
            
            // Kiểm tra mật khẩu khớp
            if (!validatePasswordMatch(password, confirmPassword)) return false;
            
            // Nếu tất cả kiểm tra passed
            // Lưu thông tin tài khoản vào localStorage
            const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
            
            // Kiểm tra xem tên đăng nhập đã tồn tại chưa
            if (accounts.some(acc => acc.username === username)) {
                alert("Lỗi: Tên đăng nhập này đã tồn tại!");
                return false;
            }
            
            // Thêm tài khoản mới
            accounts.push({
                username: username,
                email: email,
                password: password
            });
            
            // Lưu lại vào localStorage
            localStorage.setItem('accounts', JSON.stringify(accounts));
            
            alert("Đăng ký thành công!");
            // Sau đó mới cho redirect
            window.location.href = 'trangdn.html';
            return false;
        });
    }
});
