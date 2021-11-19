//map() creates a new array with the results of calling a callback on every element on the array
//runs once per element in the array and generates a new array using return value of the callback

const texts = ['rofl', 'lol', 'omg', 'ttyl'];

const caps = texts.map(function (t){
    return t.toUpperCase();
})

function print(arg){
    for(let el of arg){
        console.log(el);
    }
}

print(texts);
print(caps);

//Double our numbers array with map()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const numbersDouble = numbers.map(function(i){
    return i*2;
})

print(numbersDouble);

//Array of objects - we want to print out just the titles

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
//map through each element in the array and return the title
const movieTitles = movies.map(function(i){
    return i.title;
})
console.log(movieTitles);
print(movieTitles);
