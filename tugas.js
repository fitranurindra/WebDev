const body = document.querySelector("body");
const dark = document.getElementById("buttonDark");
const light = document.getElementById("buttonLight");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const contact = document.getElementById("contact");
const foto1 = document.getElementById("foto1");
const foto2 = document.getElementById("foto2");
const pics = document.getElementById("pics");
const pics2 = document.getElementById("pics2");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const skills = document.getElementById("skills");
const button = {
    dark : dark,
    light : light,
};

education.className = "light";
experience.className = "light";
skills.className = "light";
pics.className = "light";
pics2.className = "light";
foto1.className = "light";
foto2.className = "light";
body.className = "light";
header.className = "light";
footer.className = "light";
contact.className = "light";


function darkMode(){
    education.className = "dark";
    experience.className = "dark";
    skills.className = "dark";
    pics.className = "dark";
    pics2.className = "dark";
    foto1.className = "dark";
    foto2.className = "dark";
    contact.className = "dark";
    footer.className = "dark"
    body.className = "dark";
    header.className = "dark";
    button.dark.style.display = "none";
    button.light.style.display = "block";
}

function lightMode(){
    education.className = "light";
    experience.className = "light";
    skills.className = "light";
    pics.className = "light";
    pics2.className = "light";
    foto1.className = "light";
    foto2.className = "light";
    contact.className = "light";
    footer.className = "light"
    body.className = "light";
    header.className = "light";
    button.dark.style.display = "block";
    button.light.style.display = "none";
}

