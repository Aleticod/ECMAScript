function* iterate(array) {
    for (let name of array) {
        yield name
    }
}

const it = iterate(['oscar', 'david', 'ulises', 'ana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


let array = [1,2,3,4,7];

for (let numero of array) {
    console.log(numero);
}