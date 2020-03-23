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

const updateMedia = (req, res) => {
    const id = req.params.id
    const {name, type} = req.body;
    //Goal is to write a function that will update data within the array

    //option 1
    // for(let i = 0; i < media.length; i++) {
    //     if(media[i].id === +id) {
    //         media[i] = {
    //             id: media[i].id,
    //             name: name || media[i].name,
    //             type: type || media[i].type
    //         }
    //     }
    // }
    // res.status(200).json(media)

    //option 2
    const targetIndex = media.findIndex(media => media.id === +id)
    media[targetIndex].name = name || media[targetIndex].name;
    media[targetIndex].type = type || media[targetIndex].type;
    res.status(200).json(media)

}

const deleteMedia = (req, res) => {
    const {id} = req.params;

    //Goal is to complete the function so that a specific media is removed from the array based off what ID is passed in the params

    //option 1
    // const targetIndex = media.findIndex(media => media.id === +id)
    // if(targetIndex !== -1) {
    //     media.splice(targetIndex, 1)
    // }
    // res.status(200).json(media)

    //option 2
    for(let i = 0; i < media.length; i++) {
        if(media[i].id === +id) {
            media.splice(i, 1)
            // media.delete(media[i])
        }
    }
    res.status(200).json(media)
}

module.exports = {
    getAllMedia,
    getMedia,
    addMedia,
    updateMedia,
    deleteMedia
}