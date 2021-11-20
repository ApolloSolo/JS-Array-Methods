const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//
//Our callback (needs to be bool function) returns true or false - for each number n
//if it returns true, n is added to the filtered array odds[]
const odds = nums.filter(n =>{
    return n % 2 === 1;
})

const smallNums = nums.filter(n => {
    return n < 10;
})

const movies = [
    {
        title: "Amadeus",
        score: 85,
        year: 1984
    },
    {
        title: "Stand By Me",
        score: 99,
        year: 1986
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013
    },
    {
        title: "13 Going on 30",
        score: 70,
        year: 2004
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996
    },
    {
        title: "Alien",
        score: 90
    },
    {
        title: "Notting Hill",
        score: 77,
        year: 1999
    }
]

//Lets get an array of movies that have scores greater than 80
const goodMovies = movies.filter(n =>{
    return n.score > 80;
})

const badMovies = movies.filter(n => n.score < 70)

console.log(goodMovies);
console.log(badMovies);

//Lets get good movies, but I want an array of just their titles
//We have an array of good movies using filter, now lets use map to pull out titles
const goodMovieTitles = goodMovies.map((titles) => {
    return titles.title;
})
console.log(goodMovieTitles);