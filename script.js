"use strict"
const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
console.log(numberOfFilms);
const personalMovieBD = {
    count: numberOfFilms,
    movie:{},
    actors:{},
    genres:[],
    privat:false
};
const a = prompt ("Какой филь смотрели в последнее время?",''),
      b = +prompt ("Насколько его оцените?",''),
      c = prompt ("Какой филь смотрели в последнее время?",''),
      d = +prompt ("Насколько его оцените?",'');
personalMovieBD.movie[a] = b;
personalMovieBD.movie[c] = d;

console.log(personalMovieBD);