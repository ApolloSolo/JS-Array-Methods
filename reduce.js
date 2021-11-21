//reduce() exicutes a reducer function on each element of the array, resulting in a single value 
//Ex: take some array and reduce it into a single value. How it does that is up to us. 

const nums = [3, 5, 7, 9, 11];

//return() must take 2 parameters
nums.reduce((accumulater, currentValue) => {
    return accumulater + currentValue;
})

// Callback        accumulator  currentValue  return value
// first call       3           5               8
// second call      8           7               15
// third call       15          9               24
// fourth call      24          11              35

//accumulator will hold the sum
//currentValue represents each element
//whatever is returned in the return section will be used for the next iterations accumulator

//total prices
const prices = [27.89, 9.99, 5.49, 6.69, 28.99];

const total = prices.reduce((total, price) =>{
    return total + price;
})

console.log(total);

//Find min price
const minPrice = prices.reduce((min, price) =>{
    if(price < min){
        return price;
    } else{return min}
})

//Find heighest rated movie
const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984
    },
    {
        title: "Stand By Me",
        score: 91,
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
        score: 95,
        year: 2015
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
        score: 90,
        year: 2020
    },
    {
        title: "Notting Hill",
        score: 77,
        year: 1999
    }
]

const bestMovie = movies.reduce((max, rating) =>{
    if(rating.score > max.score){
        return rating;
    }
    else{
        return max;
    }
})

console.log(bestMovie.title +" " + bestMovie.score);

//************* SEcond arrg to reduce() ****************/
//so far we have only used one arrg for reduce() which has been a callBAck function
//Lets add a second

const numbs = [2, 4, 6, 8];
numbs.reduce((sum, num) => sum + num, 100); //sums array, but stars at 100
