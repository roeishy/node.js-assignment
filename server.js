const express = require('express')
const cors = require('cors')
const logger = require('./services/logger.service')

const app = express()
const http = require('http').createServer(app)


app.use(express.json())

if (process.env.NODE_ENV === 'production') {
} else {
    // Configuring CORS
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true,
    }
    app.use(cors(corsOptions))
}


const noteRoutes = require('./api/note/note.routes')

app.use('/api/note', noteRoutes)



const PORT = process.env.PORT || 3030
http.listen(PORT, () => {
    logger.info(`Server is running on port: ${PORT}`)
})

