const axios = require('axios')

let allCharacters = []

const getAllCharacters = (req, res) => {
    axios.get('https://api.got.show/api/show/characters')
        .then(response => {
            const characters = response.data
            // console.log(characters)
            allCharacters.push(characters)
            res.status(200).json(allCharacters)
        })
}

module.exports = {
    getAllCharacters
}