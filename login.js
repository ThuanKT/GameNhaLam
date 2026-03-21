function mockLogin() {
            const loginBtn = document.getElementById("loginBtn");
            const userProfile = document.getElementById("userProfile");
            if (loginBtn) loginBtn.style.display = "none";
            if (userProfile) userProfile.style.display = "flex";
            localStorage.setItem("isLoggedIn", "true");
        }

        function mockLogout() {
            const loginBtn = document.getElementById("loginBtn");
            const userProfile = document.getElementById("userProfile");
            if (loginBtn) loginBtn.style.display = "block";
            if (userProfile) userProfile.style.display = "none";
            localStorage.removeItem("isLoggedIn");
        }

        // Kiểm tra trạng thái khi tải trang
        window.addEventListener('load', () => {
            if (localStorage.getItem("isLoggedIn") === "true") {
                mockLogin();
            }
        });