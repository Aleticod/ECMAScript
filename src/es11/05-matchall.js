const regex = /\b(Apple)+\b/g;
const fruits = 'This are fruits like bananas, Apple, kiwi and others';

for (const fruit of fruits.matchAll(regex)) {
    console.log(fruit);
}
