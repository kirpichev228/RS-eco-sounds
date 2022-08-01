let audio = document.querySelector('.audio');
let controlsShow = document.querySelector('.controls-show')
let controls = document.querySelector('.controls')
let img = document.querySelector('.img');

    controlsShow.onclick = function () {
    controls.classList.toggle('active')
    controlsShow.classList.toggle('active')
}

    function play () {
        audio.play();
    }

    function pause () {
        audio.pause()
    }

    function stopping () {
        audio.pause();
        audio.currentTime = 0
    }

    function volume () {
        let v = this.value;
        audio.volume = v/100
    }

    

document.querySelector('.play').onclick = play;
document.querySelector('.pause').onclick = pause;
document.querySelector('.stop').onclick = stopping;
document.querySelector('.volume').oninput = volume;

let navEl = document.querySelectorAll('.nav-link');
let navOpener = document.querySelectorAll('.nav-opener');
let birdTile = document.querySelectorAll('.bird-block');
let navCloser = document.querySelectorAll('.closer');
console.log(navEl)

for (let i=0; i<navEl.length; i++) {
    //audio switch
    function audioSwitch () {
        audio.src = 'assets/audio/' + [i] + '.mp3'
        play()
    }
    navEl[i].onclick = audioSwitch;
    // audio switch

    // info switch
    function visiOn () {
        birdTile[i].classList.toggle('active'); 
    };
    navOpener[i].addEventListener('click', visiOn);
    navCloser[i].addEventListener('click', visiOn);

    // info switch

    //photo switcher
    
    function backSwitch () {
        img.src = 'assets/img/' + [i] + '.jpg'
    }
    navEl[i].addEventListener('click', backSwitch)
    //photo switcher       
};

//rain
let rain = document.querySelector('.rain')
let audioRain = document.querySelector('.audioRain')

rain.onclick = function() {
    audio.src = 'assets/audio/rain.mp3'
    if(darkSw.classList.contains('active')){
        img.src = 'assets/img/rain.jpg'
    } else if(lightSw.classList.contains('active')) {
        img.src = 'assets/img/dayrain.jpg'
    }
    play()
}
//rain

//day switch
let darkSw = document.querySelector('.dark-button')
let lightSw = document.querySelector('.light-button')
let footer = document.querySelector('.footer')
let header = document.querySelector('.header')
let body = document.querySelector('body')
let links = document.querySelectorAll('.nav-link')
let svg = document.querySelector('.svg')
let navDay = document.querySelector('.nav-day')
let navNight = document.querySelector('.nav-night')
let peepee = document.querySelector('.peepee')

function night () {
    darkSw.classList.add('active')
    lightSw.classList.remove('active')
    footer.classList.remove('light')
    header.classList.remove('light')
    body.classList.remove('active')
    for(let i=0; i<links.length; i++) {
        links[i].classList.remove('active')
    }
    navDay.classList.remove('active')
    navNight.classList.add('active')
    img.src = 'assets/img/nightforest.jpg'
    audio.src = 'assets/audio/night-forest.mp3'
    peepee.classList.remove('day')
    play()
}

function day () {
    lightSw.classList.add('active')
    darkSw.classList.remove('active')
    footer.classList.add('light')
    header.classList.add('light')
    body.classList.add('active')
    for(let i=0; i<links.length; i++) {
        links[i].classList.add('active')
    }
    navDay.classList.add('active')
    navNight.classList.remove('active')
    img.src = 'assets/img/forest.jpg'
    audio.src = 'assets/audio/forest.mp3'
    peepee.classList.add('day')
    play()
}

darkSw.onclick = night;
lightSw.onclick = day;
//day switch

//starter
let starterBtn = document.querySelector('.starter-button')
let starterWindow = document.querySelector('.starter')
let ficha = document.querySelector('.starter-ficha')
let starterOpen = document.querySelector('.starter-open')
let hand = document.querySelector('.hand')
let paragraph = document.querySelector('.starter-paragraph')
let starterHeader = document.querySelector('.starter-header')
let starterHello = document.querySelector('.starter-hello')

function helloStarter() {
    setTimeout(function(){starterHeader.classList.add('load')},100)
    setTimeout(function(){starterHello.classList.add('active')},1500)
}

document.addEventListener('DOMContentLoaded', helloStarter)

hand.addEventListener('click', function() {
    hand.classList.add('active');
    setTimeout(function() {paragraph.classList.add('move')}, 1500)
    setTimeout(function(){starterHello.classList.remove('active')},1500)
})

starterBtn.addEventListener('click', function() {
    ficha.classList.add('rotate')
})

starterOpen.addEventListener('click', function() {
    play()
    starterWindow.classList.add('hidden')
    ficha.classList.add('hidden')
})
//starter
