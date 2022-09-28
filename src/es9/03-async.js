async function* generator () {
    yield await Promise.resolve(1);
    yield await Promise.resolve(3);
    yield await Promise.resolve(5);
}

const gen = generator();

gen.next().then(response => console.log(response.value));
gen.next().then(response => console.log(response.value));
gen.next().then(response => console.log(response.value));
console.log('Hello');

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

arrayOfNames(['Oscar', 'David', 'Ana']);
console.log('After');