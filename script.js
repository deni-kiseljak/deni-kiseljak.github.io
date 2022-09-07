// preloader -------------------------------
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})

//mobile menu ------------------------------

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}


// change navbar color on scroll--------------------

function changeNavColor() {
    var navbar = document.getElementById("navbar")
    var scrollValue = window.scrollY;
    if (scrollValue < 850) {
        navbar.classList.remove('navBg');
    }
    else{
        navbar.classList.add('navBg');

    }
}

window.addEventListener('scroll', changeNavColor);


function changeNavColorMobile() {
    var navbar = document.getElementById("navbar")
    var scrollValue = window.scrollY;
    if (scrollValue < 580) {
        navbar.classList.remove('navBg');
    }
    else {
        navbar.classList.add('navBg');
    }
}

var x = window.matchMedia("(max-width: 700px)")
changeNavColorMobile(x)
window.addEventListener('scroll', changeNavColorMobile)


// typing text----------------------------

const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Developer", "Tester"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay + 250);
})