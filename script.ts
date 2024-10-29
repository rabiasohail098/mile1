const toggleButton = document.getElementById("toggle-skills") as HTMLElement;
const skills = document.getElementById("skills") as HTMLElement;
toggleButton.addEventListener("click", ()=>{
    if(skills.style.display == "block" || !skills.style.display){
        skills.style.display = "none";

    }else{
        skills.style.display = "block"
    }
   
})