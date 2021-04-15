let show = document.querySelectorAll(".show")
let nav_ul = document.querySelector("nav > ul")
let bar = document.querySelector(".bar");
let background = document.querySelector(".background");

show.forEach( (indi) => {
    indi.addEventListener('click',function(e) {
        e.preventDefault()
        this.querySelector("ul").classList.toggle('active')
        e.stopPropagation()
    })
})

show.forEach( (remove) => {
    document.addEventListener('click',function () {
        remove.querySelector("ul").classList.remove('active')
    });
})

bar.addEventListener("click", () => {
    nav_ul.classList.toggle("hide")
    background.classList.toggle("shadow")
});