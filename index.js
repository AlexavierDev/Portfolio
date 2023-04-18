function myFunction() {
    const nav = document.getElementById("nav");
    const body = document.querySelector("body");
    const main = document.querySelector("main")
    const btnMenu = document.getElementById("btnMenu")

    if(nav.className === "nav-links"){
        nav.className += " responsive";
        main.style.filter = "blur(4px)";
        btnMenu.className += " active"
    }else{
        nav.className = "nav-links";
        btnMenu.className = "fa fa-bars"
        main.style.filter = "blur(0px)";
    }
}

function removeBlur(){
    const main = document.querySelector("main")
    main.style.filter = "blur(0px)";
    myFunction()
}

