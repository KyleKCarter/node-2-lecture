const media = require('./data.json')

let id = 5

const getAllMedia = (req, res) => {
    res.status(200).json(media)
}

const getMedia = (req, res) => {
    console.log(req.params)
    const targetIndex = media.findIndex(media => media.id === +req.params.id)
    res.status(200).json(media[targetIndex])
}

const addMedia = (req, res) => {
    console.log(req.body)
    const {name, type} = req.body;
    if(!name || !type) {
        res.status(400).json({message: "Please enter both name and type"})
    } else {
        const newMedia = {id, ...req.body}
        media.push(newMedia)
        // media.push({
        //     id,
        //     name,
        //     type
        // })

        id++;
        res.status(200).json(media)
    }
}

module.exports = {
    getAllMedia,
    getMedia,
    addMedia
}