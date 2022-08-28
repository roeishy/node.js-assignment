const express = require('express')
const router = express.Router()
const { getNotes } = require('./note.controller')

router.get('/', getNotes)


module.exports = router