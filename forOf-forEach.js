const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//I want to print out each number in numbers array

function print(element){
    console.log(element);
}

print(numbers[numbers.length-1]); //it works - logs last value

numbers.forEach(print) // forEach passes in each element one by one into the print function as an arrgument

//Above is not common use. Below is better use case

numbers.forEach(function (el){ //we create an anonymous function inline for our purpose in that moment
    console.log(el);
})

for(let el of numbers){ // forOf is newer and more intuitive
    if(el % 2 === 0){
        console.log(el);
    }
}

//An array of objects

const movies = [
    {
        title: "Amadeus",
        score: 85
    },
    {
        titel: "Stand By Me",
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

// We want to print out each movie and its score "Movie - 90/100"
movies.forEach(function (movie){
    console.log(`${movie.title} - ${movie.score}/100`);
})
// forEach passes each element of movies (which are objects) as an arrgument
// Once the object is passed in, movie.title and movie.score handle bussiness

// How we would do it using for of
for(let el of movies){
    console.log(`${el.title} - ${el.score}/100`);
}
