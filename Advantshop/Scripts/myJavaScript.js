// выпадающая менюшка
let paragrath = document.querySelector('.menu .firstOfMenu');
let shape = document.querySelector('.menu i');
let peremen = document.querySelector('.menu-in-down');
let ul = document.querySelector('.menu-down');
ul.classList.add('ggg');
paragrath.addEventListener('mouseover', function () {
    ul.classList.toggle('ggg');
    peremen.classList.toggle('ddd');
    shape.classList.toggle('arrow-up')
});
paragrath.addEventListener('mouseout', function () {
    ul.classList.toggle('ggg');
    peremen.classList.toggle('ddd');
    shape.classList.toggle('arrow-up')
});
/*
shape.addEventListener('mouseover',function () {
    ul.classList.toggle('ggg');
    paragrath.classList.toggle('ddd');
    shape.classList.toggle('arrow-up')
});
shape.addEventListener('mouseout',function () {
    ul.classList.toggle('ggg');
    paragrath.classList.toggle('ddd');
    shape.classList.toggle('arrow-up')
});*/



// слайдер
let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');
let carusel = document.querySelector('.slider-track');

let imgS = document.querySelectorAll('.slider-track img');
let dotS = document.querySelectorAll('.dots-wrapper img');
let counter = 0;
let stepSize = imgS[0].clientWidth;
let i = 0;
//carusel.style.transform = 'translateX(' + `${- stepSize * counter}px)`;

btnPrev.addEventListener('click', function () {
    carusel.classList.add('sliderTransition');
    if (counter <= 0) {
        counter = 3;
        carusel.style.transform = 'translateX(' + `${- stepSize * counter}px)`;
        dotS[i].classList.remove('active');
        i = 3;
        dotS[i].classList.add('active');
    } else {
        dotS[i].classList.remove('active');
        counter--;
        i--;
        dotS[i].classList.add('active');
        carusel.style.transform = 'translateX(' + `${- stepSize * counter}px)`;
    }
});

btnNext.addEventListener('click', function () {
    carusel.classList.add('sliderTransition');
    if (counter >= imgS.length - 1) {
        counter = 0;
        carusel.style.transform = 'translateX(' + `${- stepSize * counter}px)`;
        dotS[i].classList.remove('active');
        i = 0;
        dotS[i].classList.add('active');
    } else {
        dotS[i].classList.remove('active');
        counter++;
        i++;
        dotS[i].classList.add('active');
        carusel.style.transform = 'translateX(' + `${- stepSize * counter}px)`;
    }
});

// скрытый текст 
let objP = document.querySelector('.articles-about-p');
let spanOpacity = objP.querySelector('.articles-about .opacity');
let but = document.querySelector('.articles-about-go-more');
let aside = document.querySelector('aside');
let elem1 = document.querySelector('.op1');
let elem2 = document.querySelector('.op2');
let elem3 = document.querySelector('.op3');
let elem4 = document.querySelector('.op4');

but.addEventListener('click', function () {

    if (spanOpacity.style.display != "inline") {
        spanOpacity.style.display = "inline";
        elem1.style.opacity = "1";
        elem2.style.opacity = "1";
        elem3.style.opacity = "1";
        elem4.style.opacity = "1";

        but.innerHTML = "Скрыть";
    } else {
        spanOpacity.style.display = "none";
        elem1.style.opacity = "0.1";
        elem2.style.opacity = "0.3";
        elem3.style.opacity = "0.5";
        elem4.style.opacity = "0.7";

        but.innerHTML = "Читать далее";
    }

});

//инпут расширяется
let domInput = document.querySelector('.header-bottom-input');
let someInput = domInput.querySelector('#textInput');

someInput.addEventListener("mouseup", function () {
    domInput.style.transition = "3s";
    domInput.style.width = "399px";
    someInput.style.transition = "3s"
    someInput.style.width = "299px"
});
someInput.addEventListener("mouseout", function () {
    domInput.style.transition = "3s";
    domInput.style.width = "220px";
    someInput.style.transition = "3s"
    someInput.style.width = "169px"
});
// страны 
/*
let towns = document.querySelectorAll('.popap__title li');

for (let i = 0;i < towns.length;i++) {
   
    towns[i].addEventListener('click',function () {
        
        towns[i].classList.add('active');
    });
}*/





//попап
let popapLinks = document.querySelectorAll('.popap_link');

let unclock = true;

if (popapLinks.length > 0) {
    for (let i = 0; i < popapLinks.length; i++) {
        let popapLink = popapLinks[i];
        popapLink.addEventListener('click', function (e) {
            let popapName = popapLink.getAttribute('href').replace('#', ''); //из хреф убираю # и оставляю чистое имя
            let curentPopap = document.getElementById(popapName); // получаю сам объект попап id = popap
            popapOpen(curentPopap);// функция открывает попап
            e.preventDefault(); // запрещаю ссылке перезагрузку страницы
        });
    }
}

let popapCloseIcon = document.querySelectorAll('.close-popap');
if (popapCloseIcon.length > 0) {
    for (let j = 0; j < popapCloseIcon.length; j++) {
        let close = popapCloseIcon[j];
        close.addEventListener('click', function (e) {
            popapClose(close.closest('.popap')); // функция закрывающая попап в неё засовываем объект который ближайший родитель с класом попап
            e.preventDefault(); // запрещаю ссылке перезагрузку страницы
        });
    }
}

function popapOpen(curentPopap) {
    curentPopap.classList.add('open');
    curentPopap.addEventListener('click', function (e) {
        if (!e.target.closest('.popap__content')) { // если у обьекта нет в родителях данного класса,тогда закроем попап
            popapClose(e.target.closest('.popap'));
        }
    });
}

function popapClose(popapActive) {
    popapActive.classList.remove('open');
}