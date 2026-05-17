document.getElementById("userProfile")?.addEventListener("click", function(e) {
    const dropdown = document.querySelector(".user-dropdown");
    if (dropdown) {
        dropdown.classList.toggle("active"); 
    }
    e.stopPropagation();
});

window.onclick = function() {
    const dropdown = document.querySelector(".user-dropdown");
    if (dropdown) dropdown.classList.remove("active");
};