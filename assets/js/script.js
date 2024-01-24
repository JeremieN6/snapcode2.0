function openMenu(){
    var containerNavMenu = document.getElementById("containerNavMenu");
    var iconMenu = document.getElementById("fa-bars");
    var close = document.getElementById("closeIcon");
    var containerSwitchTheme = document.getElementById("containerSwitchTheme");

    containerNavMenu.style.display = "flex";
    iconMenu.style.display = "none";
    close.style.display = "block";
    close.style.marginLeft = "-1em";
    containerSwitchTheme.style.display = "block";
}
function closeMenu(){
    var containerNavMenu = document.getElementById("containerNavMenu");
    var iconMenu = document.getElementById("fa-bars");
    var close = document.getElementById("closeIcon");
    var containerSwitchTheme = document.getElementById("containerSwitchTheme");

    containerNavMenu.style.display = "none";
    iconMenu.style.display = "block";
    close.style.display = "none";
    containerSwitchTheme.style.display = "none";
}
function switchDark(){
    var moonDark = document.getElementById("moonDark");
    var moonLight = document.getElementById("moonLight");
    var containerMoon = document.getElementById("containerMoon");
    var containerSun = document.getElementById("containerSun");
    var contentSun = document.getElementById("contentSun");
    var switchTheme = document.getElementById("switchTheme");
    var contentLogo = document.getElementById("contentLogo");
    var containerNavMenu = document.getElementById("containerNavMenu");
    var menuUl = document.getElementById("menuUl");
    var active = document.getElementById("active");

    containerMoon.classList.add('isActive');
    moonLight.style.display = "none";
    moonDark.style.display = "block";
    switchTheme.style.cssText = "background-color: #223344; border: 1px solid #223344";

    containerSun.classList.remove('isActive');
    contentSun.style.filter = "invert(99%) sepia(1%) saturate(2%) hue-rotate(259deg) brightness(109%) contrast(100%)"; //white
    contentLogo.style.filter = "none"; //white
    moonDark.style.filter = "none";


    //change body color
    document.body.style.backgroundColor = "#111729";
    document.body.style.color = "#FFF";

    containerNavMenu.style.backgroundColor = "#111729";
    menuUl.style.color = "#FFF";
    menuUl.style.fontWeight = "400";
    active.style.color = "#FFF";
}
function switchLight(){
    var moonDark = document.getElementById("moonDark");
    var moonLight = document.getElementById("moonLight");
    var containerMoon = document.getElementById("containerMoon");
    var containerSun = document.getElementById("containerSun");
    var contentSun = document.getElementById("contentSun");
    var contentLogo = document.getElementById("contentLogo");
    var switchTheme = document.getElementById("switchTheme");
    var containerNavMenu = document.getElementById("containerNavMenu");
    var menuUl = document.getElementById("menuUl");

    containerMoon.classList.remove('isActive');
    moonLight.style.display = "block";
    moonDark.style.display = "none";
    switchTheme.style.cssText = "background-color: #111729; border: 1px solid #111729";

    containerSun.classList.add('isActive');
    contentSun.style.filter = "none";
    contentLogo.style.filter = "invert(1)";
    moonLight.style.filter = "none";

    //change body color
    document.body.style.backgroundColor = "#F2F9FE";
    document.body.style.color = "#111729";

    containerNavMenu.style.backgroundColor = "#F2F9FE";
    menuUl.style.color = "#909193";
    menuUl.style.fontWeight = "600";
    active.style.color = "#111729";
    active.style.fontWeight = "700";

}
