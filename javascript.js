"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже аосмотрели?", "");

const personalMovieDb = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько вы его оцените?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько вы его оцените?", "");

personalMovieDb.movies[a] = b; 
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);