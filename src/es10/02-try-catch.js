try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    fn();
} catch {
    console.log('Estoy ocultando el error');
}