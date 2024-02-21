document.addEventListener('DOMContentLoaded', function(){
    let menu = document.getElementById('menu');
    let openMenu = document.getElementById('open-menu');
    let navMenu = document.querySelector('.sunnyside-navigation')
    menu.addEventListener('change', function(){

        navMenu.classList.toggle('sunny-nav')
        if(menu.checked){
            openMenu.style.display = 'none';
        }else{
            openMenu.style.display = 'block';
        }

    })

});