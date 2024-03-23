const fs = require('fs')

const readData = () =>{
    try {
        const data = fs.readFileSync('./db.json')
        return JSON.parse(data);
    } catch (error) {
        console.log('error: ', error)
    }
}

const writeData = (data) =>{
    try {
        fs.writeFileSync('./db.json', JSON.stringify(data))
    } catch (error) {
        console.log('error: ', error)
    }
}

module.exports = { readData, writeData }