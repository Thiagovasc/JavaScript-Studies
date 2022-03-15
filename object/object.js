const person = {

    name: 'Pedro',
    age: 25,
    hobbies: [" Programar", " Ler", " Assistir séries", " Treinar"],
    greetings: function() {
        return `Hi my name is: ${this.name}, i'm ${this.age} and my hobbies are: ${this.hobbies}`
    }
    
}

let people = new Object() 

people = {
    person1: 
    {     
        name: 'Thiago',
        age: 25,
        hobbies: [" Programming", " Read", " Watch series", " Training"],
        greetings: function() {
            return `Hi my names is: ${this.name}, i'm ${this.age} and my hobbies are: ${this.hobbies}`
        }

    },

    person2: {
        name: "Adriana",
        age: 27,
        hobbies: [" Walk", "Watch cartoons", "Play eletronic guitar", "Talk a lot"],
        greetings: function (){
            return `Hi my name is: ${this.name}, i'm ${this.age} years and my hobbies are: ${this.hobbies}`
        }

    }

}

const produts = {
    name: "Pen",
    qtt: 10,
    buy: function(offer){
        if(!offer || offer > this.qtt){
            return 'Quantity missing or unavailable'
        } else return this.qtt -= offer // this doesn't work with arrow function

    }
}