// loading


window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none";
});
// or
setTimeout(() => {
    document.getElementById("loading").style.display = "none";
}, 2000);

// navbar-shrink

window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}

// modal

function hide() {
    document.getElementById("nav").style.display = "none";
}

function look() {
    document.getElementById("nav").style.display = "block";
}

// navbar-respomsive
function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);