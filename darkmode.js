document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)) {
        document.body.classList.add("dark-mode");
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }


    });

});