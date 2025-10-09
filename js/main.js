let position = { x: window.pageXOffset, y: window.pageYOffset }
document.onscroll = () => {
    window.scrollTo(position.x, position.y)
}


window.onresize = () => {
    setSizes()
}
setSizes()
function setSizes() {
    document.querySelector("main").style.scale = window.innerWidth / 390
    if (window.innerWidth >= window.innerHeight) {
        document.querySelectorAll(".curtain-back").forEach(e => {
            e.style = `width:100%;`
        })
    } else {
        document.querySelectorAll(".curtain-back").forEach(e => {
            e.style = `height:100%;`
        })
    }
}


window.onload = () => {
    document.querySelectorAll(".curtain-back, .curtain-front").forEach(e => {
        e.classList.add("fade-Out")
    });
    document.querySelector("main").style = `opacity:1;`
    setTimeout(() => {
        document.querySelector(".curtain").remove()
        document.onscroll = ()=>{}
    }, 3000);
}