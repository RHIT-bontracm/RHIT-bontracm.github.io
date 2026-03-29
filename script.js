const techBtn = document.getElementById("techButton");
const workBtn = document.getElementById("workButton");
const eduBtn = document.getElementById("educationButton");

const techExp = document.getElementById("techExperience");
const workExp = document.getElementById("workExperience");
const eduExp = document.getElementById("educationExperience");

techBtn.addEventListener("click", function(){
    // if (techExp.style.display == "none") {
    //     techExp.style.display = "block";
    //     techBtn.textContent = "Hide";
    // }
    // else {
    //     techExp.style.display = "none";
    //     techBtn.textContent = "Show";
    // }
    techExp.classList.toggle("hidden");
});

workBtn.addEventListener("click", function(){
    if (workExp.style.display === "none") {
        workExp.style.display = "block";
        workBtn.textContent = "Hide";
    }
    else {
        workExp.style.display = "none";
        workBtn.textContent = "Show";
    }
});

eduBtn.addEventListener("click", function(){
    if (eduExp.style.display === "none") {
        eduExp.style.display = "block";
        eduBtn.textContent = "Hide";
    }
    else {
        eduExp.style.display = "none";
        eduBtn.textContent = "Show";
    }
});