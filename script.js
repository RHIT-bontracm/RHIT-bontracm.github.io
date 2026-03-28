function toggleExperience(sectionId){
    let section = document.getElementById(sectionId);
    if (section.style.display === "none"){
        section.style.display = "block";
    }
    else{
        section.style.diplays = "none";
    }
}