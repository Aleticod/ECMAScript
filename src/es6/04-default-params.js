function newUser(name, age, country) {
    var name =name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
newUser();
newUser('David', 15, 'CD');

// ES6
function newAdmin( name = 'Oscar', age = 32, country = 'COL') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('David', 15, 'MX');