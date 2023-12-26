const users = [
    { name: 'William', age: 25 },
    { name: 'Richard', age: 28 },
    { name: 'James', age: 30 },
    { name: 'John', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Michael', age: 28 },
]

function sorting(users) {
    return users.sort((a, b) => {
        if (a.age > b.age) {
            return 1;
        } else if (a.age < b.age) {
            return -1;
        } else {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        }
    })
}

const result = sorting(users);
console.log(result);