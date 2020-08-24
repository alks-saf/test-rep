"use strict";
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

    }
}
start();
console.log(numberOfFilms);
const personalMovieBD = {
    count: numberOfFilms,
    movie:{},
    actors:{},
    genres:[],
    privat:false
};

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let p = i+1;
        personalMovieBD.genres[i] = prompt('Ваш люимый жанр №' + p +" ?", '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Какой филь смотрели в последнее время?",''),
              b = +prompt("Насколько его оцените?",'');
        if (a != null && b != null && a != ' ' && b !=' ' && a.length < 50) {
            personalMovieBD.movie[a] = b;
        } else {
            i--;
        }
    }

}

rememberMyFilms();


function detectPersonalLevel() {

    if (personalMovieBD.count < 10) {
        alert('Просмотрено довольно мало фильмов'); 
    }
    else if (personalMovieBD.count >= 10 & personalMovieBD.count < 30 ) {
        alert('Вы классический зритель'); 
    }
    else if (personalMovieBD.count >= 30) {
        alert('Вы киноман');
    }
    else {
        alert('Произошла ошибка');  
    }   
}
detectPersonalLevel();

function showMyDB () {
    if (personalMovieBD.privat == false) {
        console.log(personalMovieBD);

    }
}
writeYourGenres();
showMyDB();