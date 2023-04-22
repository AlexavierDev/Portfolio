

function myFunction() {
    const nav = document.getElementById("nav");
    const main = document.querySelector("main")
    const btnMenu = document.getElementById("btnMenu")
    const body = document.querySelector("body");

    if(nav.className === "nav-links"){
        nav.className += " responsive";
        main.style.filter = "blur(4px)";
        btnMenu.className += " active"
        body.style.overflow = "hidden"
    }else{
        nav.className = "nav-links";
        btnMenu.className = "fa fa-bars"
        main.style.filter = "blur(0px)";
        body.style.overflow = "visible"
    }
}

function removeBlur(){
    const main = document.querySelector("main");
    const nav = document.getElementById("nav");
    const body = document.querySelector("body");

    if(nav.className === "nav-links responsive"){
        main.style.filter = "blur(0px)"
        nav.className = "nav-links"
        btnMenu.className += "icon"
        body.style.overflow = "visible"
    }
}

