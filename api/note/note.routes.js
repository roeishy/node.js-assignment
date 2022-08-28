const express = require('express')
const router = express.Router()
const { getNotes,addNote,removeNote } = require('./note.controller')

router.get('/', getNotes)
router.post('/', addNote)
router.post('/:id', removeNote)

module.exports = router