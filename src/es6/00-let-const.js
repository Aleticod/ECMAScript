/**
 * Use var
 * Global Scope
 * Function scope
 */
var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

/**
 * Use let
 * Scope block
 */
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

/**
 * Use const
 * Block scope
 */

const animal = 'Dog';
animal = 'Cat'; // This don't work
console.log(animal);

/**
 * Arroy functions
 */
const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

