const express = require('express')
const router = express.Router()
const { getNotes,addNote } = require('./note.controller')

router.get('/', getNotes)
router.post('/', addNote)


module.exports = router