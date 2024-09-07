
import './main.css'

const btn_menu= document.getElementById("btn-menu");

const menu_mobile= document.getElementById("menu-mobile");






btn_menu.addEventListener("click",() => {

    menu_mobile.classList.toggle("hidden");

});

window.onresize=function(){

if(window.innerWidth>=640){

    menu_mobile.classList.add("hidden");


}};


const themeToggleBtns= document.querySelectorAll('#btn-th');


const theme=localStorage.getItem('theme')

theme && document.documentElement.classList.add(theme)


const handelThemeToggle = ()=>{

    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')){
        localStorage.setItem('theme','dark');
    }
    else{
        localStorage.removeItem('theme');
    }
}

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click',handelThemeToggle)
})





