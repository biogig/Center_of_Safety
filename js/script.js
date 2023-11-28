


//Burger menu

document.querySelector('.burger').onclick = function(){
    document.querySelector('.menu ul').classList.add('mob-menu');
}

document.querySelector ('#close-btn').onclick = function() {
    document.querySelector('.menu ul').classList.remove('mob-menu');
}