scrollTopButton = document.getElementById("scrollTopButton");

window.onscroll = function() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
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
function scrollToTop() {
    var header = document.getElementById("header");
    header.scrollIntoView({behaviour: 'smooth'});
}