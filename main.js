scrollTopButton = document.getElementById("scrollTopButton");

window.onscroll = function() {
    // visibility of scroll to top button
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }

    // fade in projects when they are scrolled into view
    var elementList = document.getElementsByClassName("project");
    for (i = 0; i < 6; i++) {
        var rect = elementList[i].getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            elementList[i].classList.add("fadedIn");
        }
    }
}

window.addEventListener("resize", onResize);

function onResize() {
    // set height of picture div to match width (square)
    var element = document.getElementById("aboutmepicture");
    var width = element.clientWidth;
    element.setAttribute("style","height:"+width+"px");
    element.style.height = width+"px";
    var element = document.getElementById("aboutme");
    element.setAttribute("style","height:"+width+"px");
    element.style.height = width+"px";
}

// fade in projects if they are already on the screen
function onLoad() {
    var elementList = document.getElementsByClassName("project");
    for (i = 0; i < 6; i++) {
        var rect = elementList[i].getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            elementList[i].classList.add("fadedIn");
        }
    }
    // set height of picture div to match width (square)
    var element = document.getElementById("aboutmepicture");
    var rect = element.getBoundingClientRect();
    var width = rect.width;
    element.setAttribute("style","height:"+width+"px");
    element.style.height = width+"px";
    var element = document.getElementById("aboutme");
    element.setAttribute("style","height:"+width+"px");
    element.style.height = width+"px";
}

function scrollToProjects() {
    var projects = document.getElementById("projects");
    projects.scrollIntoView({behaviour: 'smooth'});
}
function scrollToContests() {
    var contests = document.getElementById("contests");
    contests.scrollIntoView({behaviour: 'smooth'});
}
function scrollToAboutMe() {
    var aboutme = document.getElementById("aboutme");
    aboutme.scrollIntoView({behaviour: 'smooth'});
}
function scrollToExperience() {
    var experience = document.getElementById("experience");
    experience.scrollIntoView({behaviour: 'smooth'});
}
function scrollToTop() {
    window.scrollTo({top: 0, behaviour: "smooth"});
}