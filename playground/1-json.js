const fs = require('fs');

/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON) */


/* const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
console.log(dataJSON);

const data = JSON.parse(dataJSON)
console.log(data.title) */

const dataBuffer = fs.readFileSync('./1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
user.name = 'Kumar';
user.age = 25;
const userJSON = JSON.stringify(user)
fs.writeFileSync('2-json.json', userJSON)