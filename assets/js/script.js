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

/* Testimonials swipe */
function nextTestimonial00(){
    var testimonial00  = document.getElementById("w-slider-mask-0");
    var testimonial01  = document.getElementById("w-slider-mask-1");

    // testimonial00.style.opacity = "0";
    // testimonial01.style.opacity = "1";
    // testimonial01.style.transition = "transform 500ms ease 0s";
    // testimonial01.style.transform = "translateX(-1689.6px)";

    testimonial00.style.display = "none";
    testimonial01.style.display = "block";
}
function prevTestimonial00(){
    var testimonial00  = document.getElementById("w-slider-mask-0");
    var testimonial02  = document.getElementById("w-slider-mask-2");

    // testimonial00.style.opacity = "0";
    // testimonial02.style.opacity = "1";
    // testimonial02.style.transition = "transform 500ms ease 0s";
    // testimonial02.style.transform = "translateX(-1689.6px)";

    testimonial00.style.display = "none";
    testimonial02.style.display = "block";
}

function prevTestimonial01(){
    var testimonial00  = document.getElementById("w-slider-mask-0");
    var testimonial01  = document.getElementById("w-slider-mask-1");

    // testimonial01.style.opacity ="0";
    // testimonial00.style.opacity = "1";
    // testimonial00.style.transition = "transform 500ms ease 0s";
    // testimonial00.style.transform = "translateX(-1689.6px)";
    testimonial01.style.display = "none";
    testimonial00.style.display = "block";

}
function nextTestimonial01(){
    var testimonial01  = document.getElementById("w-slider-mask-1");
    var testimonial02  = document.getElementById("w-slider-mask-2");

    // testimonial01.style.opacity = "0";
    // testimonial02.style.opacity = "1";
    // testimonial02.style.transition = "transform 500ms ease 0s";
    // testimonial02.style.transform = "translateX(-1689.6px)";
    testimonial01.style.display = "none";
    testimonial02.style.display = "block";
}

function prevTestimonial02(){
    var testimonial01  = document.getElementById("w-slider-mask-1");
    var testimonial02  = document.getElementById("w-slider-mask-2");

    // testimonial02.style.opacity = "0";
    // testimonial01.style.opacity = "1";
    // testimonial01.style.transition = "transform 500ms ease 0s";
    // testimonial01.style.transform = "translateX(-1689.6px)";
    testimonial02.style.display = "none";
    testimonial01.style.display = "block";

}
function nextTestimonial02(){
    var testimonial00  = document.getElementById("w-slider-mask-0");
    var testimonial02  = document.getElementById("w-slider-mask-2");

    // testimonial02.style.opacity = "0";
    // testimonial00.style.opacity = "1";
    // testimonial00.style.transition = "transform 500ms ease 0s";
    // testimonial00.style.transform = "translateX(-1689.6px)";
    testimonial02.style.display = "none";
    testimonial00.style.display = "block";
}
/* Testimonials swipe */


/* FAQ */
function seeMoreFAQ0(){
    var faq_answer = document.getElementById("faq_answer");

    faq_answer.style.width = "640px";
    faq_answer.style.height = "auto";
}
/* FAQ */