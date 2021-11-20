const square = (x) => {
    return x * x;
}

console.log(square(5));

const movies = [
    {
        title: "Amadeus",
        score: 85
    },
    {
        title: "Stand By Me",
        score: 99
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

//using map() to store object.title in new titles array
const titles = movies.map((movie) => {
    return movie.title;
})

const score = movies.map((scores) =>{
    return scores.score;
})

//Useing arrow function that logs items in an array
const print = (array) =>{
    for(let i of array){
        console.log(i);
    }
}

const newMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.score/10}/10`
})

print(titles);
print(score);
print(newMovies);

//lets use arrow functions to make a die - you choose number of sides
const rollDie = (sides) =>{
    return Math.floor(Math.random() * sides) + 1
}

const randomNumbers = (count) =>{
    let i = 0;
    while(i < count){
        (rollDie(count));
        i++;
    }
}
randomNumbers(100);

//Implicit Return makes the arrow function more compact - only work for a single expression
//Replace {} with () to make an implicit return
const isEven = num =>( num % 2 === 0)
console.log(isEven(rollDie(10)));

//Implicit Return without ()
const add = (a, b) => a + b
console.log(isEven(add(rollDie(100), rollDie(100))));
