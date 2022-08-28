const logger = require('../../services/logger.service')
const noteService = require('./note.service')

module.exports = {
  getNotes,
}

async function getNotes(req, res) {
  try {
    const notes = await noteService.query()
    res.json(notes)
  } catch (err) {
    logger.error('Failed to get notes', err)
    res.status(500).send({ err: 'Failed to get notes' })
  }
}