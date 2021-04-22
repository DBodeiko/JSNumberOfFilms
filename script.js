"use strict";










const personalMovieDB = {
    
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 1; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    writeYourGenres: function() {
        for (let i=1; i < 2; i++) {
            /* let a = prompt(`Ваш любимый жанр под номером? ${i}`, '');
            if (a != null  && a != '' && a.length < 50) {
                personalMovieDB.genres[i - 1]=a;
            } else {
                i--;
            } */
            let a = prompt(`Введите ваши любимые жанры через запятую`);
            if (a != null  && a != '' && a.length < 50) {
                personalMovieDB.genres = a.split(', ');
                personalMovieDB.genres.sort();
            } else {
                i--;
            }
            
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
        
    },
    
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);  
        } else {
            console.log('Pizda');
        }
    }
};


/* personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.private); */






