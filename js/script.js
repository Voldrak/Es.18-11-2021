const w = document.querySelector(".w")
const s = document.querySelector(".s")
const a = document.querySelector(".a")
const d = document.querySelector(".d")
const char = document.querySelector(".char")
const anima = document.querySelector(".animate__animated")

w.addEventListener("click", () =>{
    
    anima.classList.add('animate__slideOutUp');
    setTimeout(() => {
    anima.classList.remove('animate__slideOutUp');
    },1000)
})

s.addEventListener("click", () =>{
    
    anima.classList.add('animate__slideOutDown');
    setTimeout(() => {
        anima.classList.remove('animate__slideOutDown');
    },1000)
})

d.addEventListener("click", () =>{
    
    anima.classList.add('animate__slideOutRight');
    setTimeout(() => {
        anima.classList.remove('animate__slideOutRight');
    },1000)
})

a.addEventListener("click", () =>{
     
    anima.classList.add('animate__slideOutLeft');
    setTimeout(() => {
        anima.classList.remove('animate__slideOutLeft');
},1000)
})