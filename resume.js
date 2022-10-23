const nav = document.getElementById("resume-navbar")
const navLink = document.getElementsByClassName("nav-link")
const toggleBtn = document.getElementById("toggle-btn")
const closeBtn = document.getElementById("close-btn")
const changeTheme = document.getElementById("change-theme")
const storedTheme = localStorage.getItem("theme")

// use theme from localStorage

if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme)
}

if (storedTheme === "dark") {
    showSun()
} else {
    showMoon()
}

// toggle Dark/Light Theme

changeTheme.addEventListener("click", function() {
    toggleTheme()
})

// open navbar

toggleBtn.addEventListener("click", function() {
    openNav()
})

// close navbar 

closeBtn.addEventListener("click", function() {
    closeNav()
})

// when click nav-link, close navbar 

for (let i=0; i<navLink.length; i++) {
    navLink[i].addEventListener("click", linkAction)
}

// functions

function toggleTheme() {
    let currentTheme = document.documentElement.getAttribute("data-theme")
    let targetTheme = "light"

    if (currentTheme === "light") {
        targetTheme = "dark"
        showSun()
    } else {
        showMoon()
    }
    
    document.documentElement.setAttribute("data-theme", targetTheme)
    localStorage.setItem("theme", targetTheme)
}

function showSun() {
    document.getElementById("moon").classList.add("hide-moon")
    document.getElementById("sun").classList.remove("hide-sun")
}

function showMoon() {
    document.getElementById("moon").classList.remove("hide-moon")
    document.getElementById("sun").classList.add("hide-sun")
}

function closeNav() {
    nav.style.display = "none"
    toggleBtn.style.display = "block"
    closeBtn.style.display = "none"
}

function openNav() {
    nav.style.display = "grid"
    toggleBtn.style.display = "none"
    closeBtn.style.display = "block"
}

function linkAction() {
    closeNav()
}



