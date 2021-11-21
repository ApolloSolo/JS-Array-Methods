// in this case the key word "this" refers to what comes to the left 
//of the function fullName(), which is the Object of person()
//but will not work the same with an arrow function =>
//inside an arrow function, "this" is just going to refer to the scope it was created in.
//function was created in the window Object
const person = {
    firstName: "Matt",
    lastName: "Teixeira",
    height: 71,
    weight: 160,
    fullName: () =>{
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(() =>{
            console.log(this)
        }, 3000)
    }
}
