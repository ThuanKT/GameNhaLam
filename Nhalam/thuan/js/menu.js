
const sidebar = document.getElementById("sidebar");         
const overlay = initializeOverlay();
const categoryBtn = document.querySelector(".category");    
const categoryMenu = document.querySelector(".category-content"); 

function initializeOverlay() {
    let overlayElement = document.getElementById("overlay");
    if (!overlayElement && sidebar && sidebar.parentNode) {
        overlayElement = document.createElement("div");
        overlayElement.className = "overlay";
        overlayElement.id = "overlay";
        sidebar.parentNode.insertBefore(overlayElement, sidebar.nextSibling);
    }
    if (overlayElement) {
        overlayElement.addEventListener("click", closeSidebar);
    }
    return overlayElement;
}

function toggleMenu(e) {
    e.stopPropagation();
    if (!sidebar) return;
    sidebar.classList.toggle("show");
    document.body.classList.toggle("sidebar-open");
}

function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("show");
    document.body.classList.remove("sidebar-open");
}

function toggleSubmenu(e) {
    e.stopPropagation();
    const menuContent = document.getElementById("genreMenu");
    if (!menuContent) return;
    menuContent.classList.toggle("open");

    const btn = e.currentTarget;
    if (menuContent.classList.contains("open")) {
        btn.innerHTML = '🔥 Thể loại <span style="float:right">▴</span>';
    } else {
        btn.innerHTML = '🔥 Thể loại <span style="float:right">▾</span>';
    }
}

        document.addEventListener("click", function (e) {
            if (sidebar && !sidebar.contains(e.target) && !e.target.classList.contains("menu-btn")) {
                closeSidebar();
            }
            if (categoryMenu) {
                categoryMenu.classList.remove("show");
            }
        });

        if (categoryBtn && categoryMenu) {
            categoryBtn.onclick = (e) => {
                e.stopPropagation();
                categoryMenu.classList.toggle("show");
            }
        }