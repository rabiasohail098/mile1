var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skills.style.display == "block" || !skills.style.display) {
        skills.style.display = "none";
    }
    else {
        skills.style.display = "block";
    }
});
