const express = require('express')

const {getAllMedia, getMedia, addMedia, updateMedia, deleteMedia} = require('./controller')
const {getAllCharacters} = require('./axios')

const app = express()

//MIDDLEWARE
//example of middleware
app.use((req, res, next) => {
    console.log('testing to see if middleware works')
    // console.log(req)
    next()
})

app.use(express.json())

//ENDPOINTS
app.get('/middleware', (req, res) => {
    res.status(200).send('middleware worked')
})

app.get('/api/media', getAllMedia)
app.get('/api/media/:id', getMedia)
app.post('/api/add', addMedia)
app.put('/api/update/:id', updateMedia)
app.delete('/api/delete/:id', deleteMedia)

app.get('/api/characters', getAllCharacters)


const PORT = 6050

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))