//1)scroll event시 positon을 fixed
//scrollY: 세로 스크롤 변화
//window.scrollY이 가장 위에 있을때 0이니까,
//변화 유무로 진행하면 될듯~

const nav= document.querySelector(".nav-contain");
let currrentPosition=0;

function changeHeader(){
    if(currrentPosition!=window.scrollY)
nav.classList.add("fixed")
else{nav.classList.remove("fixed")}}

window.addEventListener('scroll',changeHeader)

