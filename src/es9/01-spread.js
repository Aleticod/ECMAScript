const user = { username: 'gndx', age: 43, country: 'MX'};
const {username, ...otherProperties} = user;
console.table(otherProperties);