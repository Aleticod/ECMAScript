
// Declarando una clase
class User {
    // Constructor
    constructor(name='Oscar', age = 32) {
        // Propiedades
        this.name = name;
        this.age = age;
    }

    // setters and getters
    get #Age() {
        return this.age;
    }

    set Age(age) {
        this.age = age;
    }

    get #Name() {
        return this.name;
    }

    set Name(name) {
        this.name = name;
    }

    // Metodos
    #speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

}

const user = new User('David');
console.log(user.greeting());
console.log(user.name);

const ana = new User();
ana.Name = 'Ana';
ana.Age = 15;
console.log(ana.greeting());