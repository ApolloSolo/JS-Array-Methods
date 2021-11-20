//Delay or pospone execution of a function
//steTimeout(callBack, delay) - must be function, not just an expression

//Afer 3 seconds, function will exicute
console.log("Hello")
setTimeout(() =>{
    console.log("Are you still there?")
}, 3000)

//setInterval() - will call callBack every x seconds
//We set it to a const so that we can clear the interval
const id = setInterval(() =>{
    console.log(Math.floor(Math.random()*10)+1);
}, 4000)

//id will print 2 numbers before stopping
setTimeout(() =>{
    clearInterval(id);
}, 8000)
//We can make this more dynamic by setting variables for setInterval seconds and clearInterval seconds