// spread operator
let person = {name:'Oscar', age: 28};
let country = 'MX';

let data = { id: 1, ...person, country};
console.log(data);

// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

result = sum(1, 2, 3, 4, 5);

const array = [ ..."hola"];
console.log(array);