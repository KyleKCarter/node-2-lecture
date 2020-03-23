const express = require('express')

const {getAllMedia, getMedia, addMedia} = require('./controller')

const app = express()

//MIDDLEWARE
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


const PORT = 6050

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))