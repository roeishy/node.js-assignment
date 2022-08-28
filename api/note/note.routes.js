const express = require('express')
const router = express.Router()
const { removeNote } = require('./note.controller')

router.post('/:id', removeNote)

module.exports = router