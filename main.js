scrollTopButton = document.getElementById("scrollTopButton");
var coolgameSlideIndex = 0;
coolGameSlideShow();
var coolgameSlideIndex2 = 0;
coolGameSlideShow2();

function coolGameSlideShow() {
    var images = document.getElementsByClassName("coolgameImage");
    for (i = 0; i < 3; i++) {
        images[i].style.display = "none";
    }
    images[coolgameSlideIndex].style.display = "block";
    coolgameSlideIndex++;
    coolgameSlideIndex %= 3;
    setTimeout(coolGameSlideShow, 5000);
}

function coolGameSlideShow2() {
    var images = document.getElementsByClassName("coolgameImage2");
    for (i = 0; i < 3; i++) {
        images[i].style.display = "none";
    }
    images[coolgameSlideIndex2].style.display = "block";
    coolgameSlideIndex2++;
    coolgameSlideIndex2 %= 3;
    setTimeout(coolGameSlideShow2, 5000);
}


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
            elementList[i].classList.add("slidedInBottom");
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

    // fade in projects if resize puts them into view and adjust height
    var elementList = document.getElementsByClassName("project");
    for (i = 0; i < 6; i++) {
        var rect = elementList[i].getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            elementList[i].classList.add("slidedInBottom");
        }
    }
}

// fade in projects if they are already on the screen
function onLoad() {
    // set height of picture div to match width (square)
    var element = document.getElementById("aboutmepicture");
    var rect = element.getBoundingClientRect();
    var width = rect.width;
    element.setAttribute("style","height:"+width+"px");
    element.style.height = width+"px";
    var element = document.getElementById("aboutme");
    element.setAttribute("style","height:"+width+"px");
    element.style.height = width+"px";

    // animate projects when in view and adjust height
    var elementList = document.getElementsByClassName("project");
    for (i = 0; i < 6; i++) {
        var rect = elementList[i].getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            elementList[i].classList.add("slidedInBottom");
        }
    }
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