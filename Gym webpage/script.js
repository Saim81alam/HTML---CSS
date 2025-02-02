let menu_icon = document.querySelector('.menu');
let menu = document.querySelector('.dropdown-content');
let click = 0;

menu_icon.addEventListener("click",()=>{
    menu.classList.remove("nav-list");
    
    click++;

    if(click%2 == 0){
        menu.classList.add("nav-list");
    }

})
