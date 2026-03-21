document.addEventListener("DOMContentLoaded", function () {
    /* 1. LẤY Ô INPUT SEARCH */
    const searchInput = document.getElementById("searchInput") 
                     || document.getElementById("searchGame");
    /* Lấy ô nhập tìm kiếm (ưu tiên searchInput, không có thì lấy searchGame) */

    /* 2. LẤY DANH SÁCH GAME */
    const allGames = document.querySelectorAll(".game-item");
    /* Lấy tất cả card game */

    const slider = document.querySelector(".slider");
    /* Lấy slider (hiện tại chưa dùng trong đoạn này) */

    if (searchInput) {
        /* Nếu tồn tại ô search */

        searchInput.addEventListener("input", function () {
            /* Bắt sự kiện khi người dùng gõ */

            let keyword = this.value.toLowerCase().trim();
            /* Lấy nội dung nhập → chuyển về chữ thường + xóa khoảng trắng */

            if (keyword !== "") {
                document.body.classList.add("searching");
                /* Thêm class 'searching' để kích hoạt CSS search */

                allGames.forEach(game => {
                    /* Duyệt từng game */

                    let title = game.querySelector('.game-title')?.innerText.toLowerCase() || "";
                    /* Lấy tên game (nếu không có thì = "") */

                    if (title.includes(keyword)) {
                        /* Nếu tên game chứa từ khóa */

                        game.setAttribute("style",
                            "display: flex !important; visibility: visible !important; opacity: 1 !important;");
                        /* Ép hiện game */

                        game.classList.remove("hidden-game");
                        /* Bỏ class ẩn */
                    } else {
                        /* Nếu không khớp */

                        game.setAttribute("style", "display: none !important;");
                        /* Ẩn game */

                        game.classList.add("hidden-game");
                        /* Thêm class ẩn */
                    }
                });

            } else {
                /* Nếu ô search rỗng */

                document.body.classList.remove("searching");
                /* Tắt chế độ search */

                allGames.forEach(game => {
                    game.removeAttribute("style");
                    /* Xóa style đã set */

                    game.classList.remove("hidden-game");
                    /* Hiện lại tất cả game */
                });
            }
        });
    }

    /* 3. MENU (GIỮ NGUYÊN) */
    window.toggleMenu = function(e) {
        e.stopPropagation(); 
        /* Ngăn sự kiện lan ra ngoài */

        document.getElementById("sidebar")?.classList.toggle("show");
        /* Bật/tắt sidebar */
    };
});