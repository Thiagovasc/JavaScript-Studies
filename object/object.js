const person = {

    name: 'Pedro',
    age: 25,
    hobbys: [" Programar", " Ler", " Assistir séries", " Treinar"],
    greetings: function() {
        return `Oi meu nome é ${this.name}, tenho ${this.age} e gosto de ${this.hobbys}`
    }
    
}

let people = new Object() 

people = {
    person1: 
    {     
        name: 'Thiago',
        age: 25,
        hobbys: [" Programar", " Ler", " Assistir séries", " Treinar"],
        greetings: function() {
            return `Oi meu nome é ${this.name}, tenho ${this.age} e gosto de ${this.hobbys}`
        }

    },

    person2: {
        name: "Adriana",
        age: 27,
        hoobys: [" Caminhar", "Ver hello kita", "Fazer boiolage", "Tocar guitarrinha"],
        greetings: function (){
            return `Oi meu nome é: ${this.name}, tenho ${this.age} anos e gosto de ${this.greetings}`
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