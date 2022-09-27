const fnPromise = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Async!!'), 2000) : reject(new Error('Error!!'));
    });
}

const fnAsync = async() => {
    const something = await fnPromise();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
fnAsync();
console.log('After');