//1)scroll event시 positon을 fixed
//scrollY: 세로 스크롤 변화
const nav= document.querySelector(".nav-contain");
let currrentPosition=0;

function changeHeader(){
    if(currrentPosition!=window.scrollY)
nav.classList.add("fixed")
else{nav.classList.remove("fixed")}}

window.addEventListener('scroll',changeHeader)