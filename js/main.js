const navList = document.querySelector(".nav-list");
document.querySelector(".hamburger").onclick = () => {
    navList.classList.add("show")
}
document.querySelector(".close").onclick = () => {
    navList.classList.remove("show")
}