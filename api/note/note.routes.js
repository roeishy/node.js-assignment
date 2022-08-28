const express = require('express')
const router = express.Router()
const { addNote } = require('./note.controller')


router.post('/', addNote)


module.exports = router