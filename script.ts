const toggleButton = document.getElementById("toggle-skills") as HTMLElement;
const skills = document.getElementById("skills") as HTMLElement;
toggleButton.addEventListener("click", ()=>{
    if(skills.style.display == "none" || !skills.style.display){
        skills.style.display = "block";

    }else{
        skills.style.display = "none"
    }
   
})