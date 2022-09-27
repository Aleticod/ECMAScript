// Enhaced object literals

function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

function newAdmin(user, age, country, aID) {
    return {
        user,
        age,
        country,
        id: aID
    }
}

console.log(newAdmin('gndx', 34, 'MX', 1))