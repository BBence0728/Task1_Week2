/*

// Egyesével egyíszerűb kiirogatás


let title = 'Az igazi beavatás útja';
console.log(title);
let author = 'Franz Bardon';
console.log(author);
let year = 2017;
console.log(year);
let isNewerThan2000 = (year > 2000);
console.log(isNewerThan2000);
let currentYear = new Date().getFullYear(); // a jelenlegi év lekérése a dátum objektum segítségével
let age = currentYear - year; // kiszámítjuk az életkort
console.log(age); // kiírjuk a konzolra az életkort
let characters = ['Bardon', 'Frabato'];
console.log(characters);
console.log(characters [0]);
console.log(characters [1]);
*/
//  Két könyv adatainak tömbösítése


let favoriteBook = [{
    title: "Az igazi beavatás útja",
    author: "Franz Bardon",
    year: 2017,
    isNewerThan2000: true,
    age: new Date().getFullYear() - 2017,
    characters: ["Bardon", "Frabato", "Merlin"],
  },
  {
    title: "A Trónok harca",
    author: "George R. R. Martin",
    year: 1996,
    isNewerThan2000: true,
    age: new Date().getFullYear() - 1996,
    characters: ["John", "Sansa", "Aria"],
  },
];

/*
//kiíratás a legegyszerűbben loop segítségével


for (let i = 0; i < favoriteBook.length; i++) { 
    console.log(favoriteBook[i]);
  }

*/

// Életkor összehasonlítás


  let olderBook, newerBook;

if (favoriteBook[0].year < favoriteBook[1].year) {
  olderBook = favoriteBook[0];
  newerBook = favoriteBook[1];
} else {
  olderBook = favoriteBook[1];
  newerBook = favoriteBook[0];
}

const ageDifference = newerBook.year - olderBook.year;
const ageDifferencePositive = Math.abs(ageDifference);
console.log(ageDifferencePositive);

// Kiiratás tömbből egyesével


/*
  console.log(favoriteBook[0]);
  console.log(favoriteBook[0].characters [0]); // kiíratás egyesével
  console.log(favoriteBook[0].author);
  console.log(favoriteBook[0].year);
  console.log(favoriteBook[0].age);

  console.log(favoriteBook[1]);
  console.log(favoriteBook[1].characters [0]);
  console.log(favoriteBook[1].author);
  console.log(favoriteBook[1].year);
  console.log(favoriteBook[1].age);
  */
  


