'use strict'
const buttonLang = document.querySelector('.eng');
const dropMenu = document.querySelector('.drop_bg');
const withDrop = document.querySelector('#with_drop')


buttonLang.addEventListener('click', function(){
    withDrop.classList.add('with_drop'); // добовляется класс с дропдауном
    dropMenu.classList.remove('display_non'); // удаляется класс, который скрывает дропдаун
})

document.addEventListener('click', function(ev) {
    let click = ev.target.classList.value; // название блока, по покоторому был сделан клик 
    if (click === 'back' || click === 'header'  || click === 'head_menu' || click === 'other' || click === 'steam' || click === 'platform'){
        withDrop.classList.remove('with_drop'); // здесь сделанно наоборот, удаляется класс с самим дропдауном  
        dropMenu.classList.add('display_non'); //скрытие дропдауна 
    }
});

//scroll

const moveToStory = document.querySelector('.move_story');
function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth',
	});
};

const pointOfStop = document.querySelector('.second_page');

moveToStory.addEventListener('click', function() {
    scrollTo(pointOfStop);
});

//headerEverywhere

const upTo = document.querySelector('#view_scroll');

window.addEventListener('scroll', function(){
    upTo.classList.remove('toUp');
});

window.addEventListener('scroll', function () {

    let up_To = document.querySelector('#view_scroll');

    if (window.pageYOffset > 200){
        up_To.classList.add('icon-fixed');
    }else{
        up_To.classList.add('toUp');
    }

});



const header = document.querySelector('.header');
upTo.addEventListener('click', function () {
    scrollTo(header);
});

