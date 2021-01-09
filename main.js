scrollTopButton = document.getElementById("scrollTopButton");
var coolgameSlideIndex = 0;
coolGameSlideShow();
var plannerSlideIndex = 0;
plannerSlideShow();
var battleshipSlideIndex = 0;
battleshipSlideShow();
walkablockSlideIndex = 0;
walkablockSlideShow();
var auroraSlideIndex = 0;
auroraSlideShow();
var recursuinSlideIndex = 0;
recursionSlideShow();
var raycastingSlideIndex = 0;
raycastingSlideShow();
var dicegameSlideIndex = 0;
dicegameSlideShow();
var wordsearchSlideIndex = 0;
wordsearchSlideShow();


var a1 = 0;
var a2 = Math.PI/4;
var a3 = Math.PI*3/4;
var a4 = Math.PI;
var a5 = Math.PI*7/11;
var canvas = document.getElementById("aboutmeCanvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "purple";
setInterval(drawAboutMeCircles, 15);


function drawAboutMeCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(document.getElementById("profilePicture"), 100, 100, canvas.width-200, canvas.height-200);
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2, a1, a1+Math.PI/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2-15, a2, a2+Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2-30, a3, a3+Math.PI*2/3);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2-45, a4, a4+Math.PI*3/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2-60, a5, a5+Math.PI/2);
    ctx.stroke();
    a1 += 0.005;
    a2 += 0.0075;
    a3 -= 0.006;
    a4 -= 0.003;
    a5 += 0.0045;
}

function coolGameSlideShow() {
    var images = document.getElementsByClassName("coolgameImage");
    for (i = 0; i < 6; i++) {
        images[i].style.opacity = "0";
    }
    images[coolgameSlideIndex].style.opacity = window.innerWidth > 700 ? 1 : 0.3;
    coolgameSlideIndex++;
    coolgameSlideIndex %= 6;
    setTimeout(coolGameSlideShow, 8000);
}

function plannerSlideShow() {
    var images = document.getElementsByClassName("plannerImage");
    for (i = 0; i < 6; i++) {
        images[i].style.opacity = "0";
    }
    images[plannerSlideIndex].style.opacity = window.innerWidth > 700 ? 1 : 0.3;
    plannerSlideIndex++;
    plannerSlideIndex %= 6;
    setTimeout(plannerSlideShow, 8000);
}

function battleshipSlideShow() {
    var images = document.getElementsByClassName("battleshipImage");
    for (i = 0; i < 3; i++) {
        images[i].style.opacity = "0";
    }
    images[battleshipSlideIndex].style.opacity = window.innerWidth > 700 ? 1 : 0.3;
    battleshipSlideIndex++;
    battleshipSlideIndex %= 3;
    setTimeout(battleshipSlideShow, 8000);
}

function walkablockSlideShow() {
    var images = document.getElementsByClassName("walkablockImage");
    if (window.getComputedStyle(images[0]).getPropertyValue("opacity") > 0.6) {
        walkablockSlideIndex++;
        walkablockSlideIndex %= 3;
        for (i = 0; i < 3; i++) {
            images[i].style.display = "none";
        }
        images[walkablockSlideIndex].style.display = "block";
    }
    setTimeout(walkablockSlideShow, 3000);
}


function auroraSlideShow() {
    var images = document.getElementsByClassName("auroraImage");
    if (window.getComputedStyle(images[0]).getPropertyValue("opacity") > 0.6) {
        auroraSlideIndex++;
        auroraSlideIndex %= 5;
        for (i = 0; i < 5; i++) {
            images[i].style.display = "none";
        }
        images[auroraSlideIndex].style.display = "block";
    }
    setTimeout(auroraSlideShow, 3000);
}


function recursionSlideShow() {
    var images = document.getElementsByClassName("recursionImage");
    if (window.getComputedStyle(images[0]).getPropertyValue("opacity") > 0.6) {
        recursuinSlideIndex++;
        recursuinSlideIndex %= 6;
        for (i = 0; i < 6; i++) {
            images[i].style.display = "none";
        }
        images[recursuinSlideIndex].style.display = "block";
    }
    setTimeout(recursionSlideShow, 3000);
}

function raycastingSlideShow() {
    var images = document.getElementsByClassName("raycastingImage");
    if (window.getComputedStyle(images[0]).getPropertyValue("opacity") > 0.6) {
        raycastingSlideIndex++;
        raycastingSlideIndex %= 3;
        for (i = 0; i < 3; i++) {
            images[i].style.display = "none";
        }
        images[raycastingSlideIndex].style.display = "block";
    }
    setTimeout(raycastingSlideShow, 3000);
}


function dicegameSlideShow() {
    var images = document.getElementsByClassName("dicegameImage");
    if (window.getComputedStyle(images[0]).getPropertyValue("opacity") > 0.6) {
        dicegameSlideIndex++;
        dicegameSlideIndex %= 3;
        for (i = 0; i < 3; i++) {
            images[i].style.display = "none";
        }
        images[dicegameSlideIndex].style.display = "block";
    }
    setTimeout(dicegameSlideShow, 3000);
}


function wordsearchSlideShow() {
    var images = document.getElementsByClassName("wordsearchImage");
    if (window.getComputedStyle(images[0]).getPropertyValue("opacity") > 0.6) {
        wordsearchSlideIndex++;
        wordsearchSlideIndex %= 4;
        for (i = 0; i < 4; i++) {
            images[i].style.display = "none";
        }
        images[wordsearchSlideIndex].style.display = "block";
    }
    setTimeout(wordsearchSlideShow, 3000);
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
    var element = document.getElementById("aboutmeCanvas");
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
    var images = document.getElementsByClassName("coolgameImage");
    for (i = 0; i < 3; i++) {
        images[i].style.opacity = "0";
    }
    images[coolgameSlideIndex].style.opacity = window.innerWidth > 700 ? 1 : 0.3;

    var images = document.getElementsByClassName("plannerImage");
    for (i = 0; i < 6; i++) {
        images[i].style.opacity = "0";
    }
    images[plannerSlideIndex].style.opacity = window.innerWidth > 700 ? 1 : 0.3;

    var images = document.getElementsByClassName("battleshipImage");
    for (i = 0; i < 3; i++) {
        images[i].style.opacity = "0";
    }
    images[battleshipSlideIndex].style.opacity = window.innerWidth > 700 ? 1 : 0.3;
}

// fade in projects if they are already on the screen
function onLoad() {
    // set height of picture div to match width (square)
    var element = document.getElementById("aboutmeCanvas");
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