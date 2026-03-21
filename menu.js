/* 2. QUẢN LÝ MENU (SIDEBAR & CATEGORY) */
const sidebar = document.getElementById("sidebar");         // sidebar chính
const categoryBtn = document.querySelector(".category");    // nút mở menu thể loại
const categoryMenu = document.querySelector(".category-content"); // menu thể loại
        function toggleMenu(e) {
            e.stopPropagation();
            sidebar.classList.toggle("show");
        }

        function toggleSubmenu(e) {
            e.stopPropagation();
            const menuContent = document.getElementById("genreMenu");
            menuContent.classList.toggle("open");

            const btn = e.currentTarget;
            if (menuContent.classList.contains("open")) {
                btn.innerHTML = '🔥 Thể loại <span style="float:right">▴</span>';
            } else {
                btn.innerHTML = '🔥 Thể loại <span style="float:right">▾</span>';
            }
        }

        // Đóng menu khi click ra ngoài
        document.addEventListener("click", function (e) {
            // Đóng sidebar
            if (sidebar && !sidebar.contains(e.target) && !e.target.classList.contains("menu-btn")) {
                sidebar.classList.remove("show");
            }
            // Đóng category menu
            if (categoryMenu) {
                categoryMenu.classList.remove("show");
            }
        });

        if (categoryBtn) {
            categoryBtn.onclick = (e) => {
                e.stopPropagation();
                categoryMenu.classList.toggle("show");
            }
        }