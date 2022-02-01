// teb js
const tabButton = document.querySelectorAll(".services-tab-bottom > div");
const tabSection = document.querySelectorAll(".services-tabs > article");

for (let i = 0; i < tabButton.length; i++){
    tabButton[i].addEventListener('click', () => {
        tabButton.forEach(item => item.classList.remove("active"));
        tabButton[i].classList.add("active");

        tabSection.forEach(item => item.classList.remove("active-tab"));
        tabSection[i].classList.add("active-tab");
    })
}

// record js
const recordClick = document.querySelectorAll(".records-container > div:nth-child(even)");

recordClick.forEach(i => {
    i.addEventListener("click", () => {
        i.classList.toggle("act");
    })
})

// mobile menu 
const menuBtn = document.querySelector(".nav-mobile");
const menu = document.querySelector(".header-nav");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("act");
    menu.classList.toggle("act");
})