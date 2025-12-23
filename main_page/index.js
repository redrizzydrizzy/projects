function themeToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");

    var x = document.getElementById("snackbar_theme-toggle");
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000)

    const lightToggle = document.getElementById("theme_toggle_button");
    if (lightToggle.innerText === "Disabled") {
        lightToggle.innerText = "Enabled";
    } else {
        lightToggle.innerText = "Disabled";
    }
}

