const leftMenu = document.querySelector('.linky');





function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

function moveLeftMenu(){
    console.log('moving menu', window.scrollY);
    leftMenu.style.transform = `translateY(${window.scrollY}px)`
    console.log(`translateY(${window.scrollY}px)`);
}

window.addEventListener('scroll', debounce(moveLeftMenu));


