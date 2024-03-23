const fs = require('fs')
const path = require('path')

const readData = () =>{
    try {
        const filePath = path.join(__dirname, 'db.json')
        const data = fs.readFileSync(filePath)
        return JSON.parse(data);
    } catch (error) {
        console.log('error: ', error)
    }
}

const writeData = (data) =>{
    try {
        const filePath = path.join(__dirname, 'db.json')

        fs.writeFileSync(filePath, JSON.stringify(data))
    } catch (error) {
        console.log('error: ', error)
    }
}

module.exports = { readData, writeData }