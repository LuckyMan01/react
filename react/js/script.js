'use strict';

// let number = 5;
// console.log(number);

// var Name = 'ivan';
// Name + number;
// alert ('Hello');
// const result = confirm('are you here?');
// console.log(result);
// const answer = prompt ('wam e 18', '18');
// console.log(answer);
// const answers = [];
// answers[0] = prompt('Яке ваше імя?', '');
// answers[2] = prompt('Яке ваше фамілія?', '');
// answers[3] = prompt('Скільки вам років?', '');

// console.log(typeof(answers));
//  const category = 'toys';
//  console.log(`https://someurel.com/${category}/5`);
//  const user = 'Ivan';
//  alert(`Prevet, ${user}`);
// console.log('arr' + " - object");
// console.log( 4 + +" 5");
// let incr = 10,
//     decr = 10;
// ++incr;
// --decr; 

// console.log(++incr);
// console.log(--decr);
// console.log(2*4 == '8');
// const isChecked = true,
//       isClose = false;
// console.log(isChecked && isClose);


const numverOfFilms = +prompt('Скільки фільмів ви переглянули ?', '');
const personalMovieDB = {
    count: numverOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};
// const a = prompt('Один з останіх переглянутих фільмів', ''),
//       b = prompt('Яку оцінку поставите йому', ''),
//       c = prompt('Один з останіх переглянутих фільмів', ''),
//       d = prompt('Яку оцінку поставите йому', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++){
    const   a = prompt('Один з останіх переглянутих фільмів', ''),
            b = prompt('Яку оцінку поставите йому', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else{
        console.log('error'); 
        i--;
    }

}

if (personalMovieDB.count < 10){
    console.log('Переглянули мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний Користувач');
} else if (personalMovieDB.count >= 30){
    console.log('ви кыноман');
} else {
    console.log('Вийшла помилка');
}



console.log(personalMovieDB);

// if (4 == 9){
//     console.log('OK!');
// } else{
//     console.log('eroor');
// }


// const num = 50;
// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('Ok!');
// }

// const num = 50;
// (num === 50) ? console.log('OK!') : console.log('error');


// const num = 50;
// switch (num){
//     case 49:
//         console.log('eroor');
//         break;
//     case 100:
//         console.log('eroor');
//         break;
//     case 50:
//         console.log('Trye');
//         break;
//     default:
//         console.log('----1'); 
//         break;
// }

// let num = 50;

// while (num <= 55){
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++){
//     console.log(num);
//     num++
// }

// for (let i = 1; i < 10; i++){
//     if (i === 6){
//         // break;
//         continue;
//     }

//     console.log(i)
// }
