// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Hàm kiểm tra trường bỏ trống
function validateNotEmpty(value, fieldName) {
  if (!value || !value.trim()) {
    alert('Lỗi: ' + fieldName + ' không được bỏ trống!');
    return false;
  }
  return true;
}

// Hàm kiểm tra mật khẩu khớp
function validatePasswordMatch(password, confirmPassword) {
  if (password !== confirmPassword) {
    alert('Lỗi : Mật khẩu không khớp!');
    return false;
  }
  return true;
}

// Hàm kiểm tra mật khẩu hợp lệ
function validatePassword(password) {
  if (password.length < 6) {
    alert('Lỗi : Mật khẩu phải có ít nhất 6 kí tự!');
    return false;
  }
  return true;
}

// Hàm kiểm tra tên đăng nhập phải viết liền, không dấu
function validateUsername(username) {
  const usernameRegex = /^[A-Za-z0-9]+$/;
  if (!usernameRegex.test(username)) {
    alert('Lỗi : Tên đăng nhập phải viết liền và không dấu!');
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
      const username = document.getElementById('reg-user').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const password = document.getElementById('reg-pass').value;
      const confirmPassword = document.getElementById('re-pass').value;

      // Kiểm tra các bước logic
      if (!validateNotEmpty(username, 'Tên đăng nhập')) return;
      if (!validateNotEmpty(email, 'Email')) return;
      if (!validateNotEmpty(password, 'Mật khẩu')) return;
      if (!validateNotEmpty(confirmPassword, 'Xác nhận mật khẩu')) return;

      if (!validateUsername(username)) return;

      if (!validateEmail(email)) {
        alert('Loi: Email không hợp lệ!');
        return;
      }

      if (!validatePassword(password)) return;
      if (!validatePasswordMatch(password, confirmPassword)) return;

      // Kiểm tra localStorage
      const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      if (accounts.some(acc => acc.username === username)) {
        alert('Lỗi : Tên đăng nhập đã tồn tại!');
        return;
      }

      // Lưu tài khoản
      accounts.push({
        username: username,
        email: email,
        password: password
      });

      localStorage.setItem('accounts', JSON.stringify(accounts));
      alert('Đăng kí thành công!');
      window.location.href = 'trangdn.html';
    });
  }
});
