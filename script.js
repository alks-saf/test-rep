"use strict";
/* let numberOfFilms;
/* function start() {
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

    }
}
start(); */
/* console.log(numberOfFilms); */
const personalMovieBD = {
    count: 0,
    movie:{},
    actors:{},
    genres:[],
    privat:true,
    start: function () {
        let numberOfFilms;
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
        }
        personalMovieBD.count = numberOfFilms;
    },    
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let p = i+1;
            personalMovieBD.genres[i] = prompt('Ваш люимый жанр №' + p +" ?", '');
            if (personalMovieBD.genres[i] == '' || personalMovieBD.genres[i] == null) {
                i--;  
            }

        }
        personalMovieBD.genres.forEach(function(val,i) {console.log(`Любимый жанр № ${i+1} это ${val}`)});
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 3; i++) {
            const a = prompt("Какой филь смотрели в последнее время?",''),
                  b = +prompt("Насколько его оцените?",'');
            if (a != null && b != null && a != ' ' && b !=' ' && a.length < 50) {
                personalMovieBD.movie[a] = b;
            } else {
                i--;
            }
        }    
    },
    detectPersonalLevel: function() {

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
    },
    showMyDB: function () {
        if (personalMovieBD.privat == false) {
            console.log(personalMovieBD);
    
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieBD.privat = personalMovieBD.privat ? false : true;
    }
};

personalMovieBD.start();
personalMovieBD.rememberMyFilms();
personalMovieBD.writeYourGenres();
personalMovieBD.detectPersonalLevel();
personalMovieBD.toggleVisibleMyDB();
personalMovieBD.showMyDB();








