document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
});

// Function to reveal elements on scroll
function revealOnScroll() {
    var items = document.querySelectorAll('.animated-invisible');
    for (var i = 0; i < items.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = items[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            items[i].classList.add('animate__fadeInUp');
            items[i].classList.remove('animated-invisible');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);

var i = 0;
var txt = 'Crafting seamless experiences from server to client. Specializing in technologies like' +
    'Node.js and React for dynamic web solutions. Transforming ideas into intuitive mobile apps' +
    'using Flutter and React Native. Designing robust backend systems and elegant frontends to' +
    'build scalable applications. Passionate about innovation and solving complex problems with' +
    'creative solutions.....'
var speed = 30;
document.addEventListener('DOMContentLoaded', function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typed-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
});

document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // Add the height of the navbar if fixed navbar is used
    // var navbarHeight = document.querySelector(".navbar").offsetHeight;

    var aboutSection = document.getElementById("About").offsetTop;
    var workSection = document.getElementById("work").offsetTop;
    var contactSection = document.getElementById("Contact").offsetTop;

    var activeLink;

    if (scrollPosition < workSection) {
        activeLink = document.querySelector(".nav-link[href='#About']");
    } else if (scrollPosition >= workSection && scrollPosition < contactSection) {
        activeLink = document.querySelector(".nav-link[href='#work']");
    } else {
        activeLink = document.querySelector(".nav-link[href='#Contact']");
    }

    // Remove 'active' class from all nav links
    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.classList.remove("active");
    });

    // Add 'active' class to the active link
    activeLink.classList.add("active");
});

const lines = [
    "Welcome to  my Project Showcase",
    "(Project 1): MACHINERY MAINTANANCE APPLICATION = ( Effort, Time )=>{",
    "Developing a Mobile Application to Ashok Leyland Company, the project about ",  //3
    "Stock & Error Mechanisms for Machines using JAVA & FIREBASE. }",  //4
    "----------------------------------------------------------> ",
    "(Project 2):  NUMBER PLATE RECOGNITION = (Effort, Time)=>{",
    "Developing a Number Plate Recognition Mobile App to Enhance Road  Safety   ", //7
    "using Machine Learning for Our College Smart Agni Hackathon.. }",  //8
    "----------------------------------------------------------> ",
    "(Project 3):AGNI ALUMNI WEBSITE  (Effort, Time)=>{",
    " We Develop the Second version of Our College Alumni Website with Enhancing the  ",//11
    " UI & Adding Several Backend Functionalities.}",   //12
    "----------------------------------------------------------> ",
    "(Project 4):EMPLOYEE MANAGEMENT SYSTEM (Effort, Time)=>{",
    " Developing a Mobile EMS Application with Enhancing the  ", //16
    " UI &Basic features and UI Components using React & Flask.}", //17
];

document.addEventListener("DOMContentLoaded", function () {
    const lineElements = document.querySelectorAll(".prompt p");
    const cursor = document.querySelector(".cursor");

    let lineIndex = 0;
    let charIndex = 0;

    function typeChar() {
        const line = lines[lineIndex];
        if (charIndex < line.length) {
            document.getElementById(`line${lineIndex + 1}`).textContent += line.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, Math.random() * 80 + 1); // Random typing speed
        } else {
            lineIndex++;
            charIndex = 0;
            if (lineIndex < lines.length) {
                setTimeout(typeChar, 1000); // Delay between lines
            } else {
                cursor.style.display = "none"; // Hide cursor when typing is complete
            }
        }
    }
    // Start typing
    setTimeout(typeChar, 1000); // Delay before typing starts
});

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}
