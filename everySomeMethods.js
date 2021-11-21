//*** every() tests whether all elements in the array pass the provided function. It returns a Boolean value.
const exams = [85, 67, 99, 88, 52, 62, 96, 100, 92];

//score arrgument will reprecent each element in the array of exams, then check to see if every element meets the condition
exams.every(score =>{
    return score >= 53;
})
//false - at least one score is less than 53

//****** some() ******/

// some() similar to every, but returns true if any of the array elements pass the test function
const words = ["dog", "Milk", "mock", "earth", "three"];

words.some(w =>{
    console.log(w.length >= 4)
})

//do any words start with "m" or "M"
words.some(w => {
    console.log(w[0] === "m" || w[0] === "M")
})
//results: false, true, true, false, false

//function that checks for even numbers
function allEvens(arr){
    return arr.every(e => e % 2 === 0)
}