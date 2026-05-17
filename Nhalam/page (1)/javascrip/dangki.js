// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Hàm kiểm tra trường bỏ trống
function validateNotEmpty(value, fieldName) {
  if (!value || !value.trim()) {
    alert('Loi: ' + fieldName + ' khong duoc bo trong!');
    return false;
  }
  return true;
}

// Hàm kiểm tra mật khẩu khớp
function validatePasswordMatch(password, confirmPassword) {
  if (password !== confirmPassword) {
    alert('Loi: Mat khau nhap lai khong khop!');
    return false;
  }
  return true;
}

// Hàm kiểm tra mật khẩu hợp lệ
function validatePassword(password) {
  if (password.length < 6) {
    alert('Loi: Mat khau phai co it nhat 6 ky tu!');
    return false;
  }
  return true;
}

// Hàm kiểm tra tên đăng nhập phải viết liền, không dấu
function validateUsername(username) {
  const usernameRegex = /^[A-Za-z0-9]+$/;
  if (!usernameRegex.test(username)) {
    alert('Loi: Ten dang nhap phai viet lien va khong dau!');
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
      if (!validateNotEmpty(username, 'Ten dang nhap')) return;
      if (!validateNotEmpty(email, 'Email')) return;
      if (!validateNotEmpty(password, 'Mat khau')) return;
      if (!validateNotEmpty(confirmPassword, 'Xac nhan mat khau')) return;

      if (!validateUsername(username)) return;

      if (!validateEmail(email)) {
        alert('Loi: Email khong hop le!');
        return;
      }

      if (!validatePassword(password)) return;
      if (!validatePasswordMatch(password, confirmPassword)) return;

      // Kiểm tra localStorage
      const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      if (accounts.some(acc => acc.username === username)) {
        alert('Loi: Ten dang nhap nay da ton tai!');
        return;
      }

      // Lưu tài khoản
      accounts.push({
        username: username,
        email: email,
        password: password
      });

      localStorage.setItem('accounts', JSON.stringify(accounts));
      alert('Dang ky thanh cong!');
      window.location.href = 'trangdn.html';
    });
  }
});
