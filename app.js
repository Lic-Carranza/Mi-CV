document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const header = document.querySelector("header");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        header.classList.add(savedTheme); 
    }

    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            header.classList.remove("light-theme");
            body.classList.add("dark-theme");
            header.classList.add("dark-theme");
         
            // Guardar el tema en localStorage
            localStorage.setItem("theme", "dark-theme");
        } else {
           
            body.classList.remove("dark-theme");
            header.classList.remove("dark-theme");
            body.classList.add("light-theme");
            header.classList.add("light-theme");
           
            // Guardar el tema en localStorage
            localStorage.setItem("theme", "light-theme");
        }
    });
});
