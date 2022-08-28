const logger = require('../../services/logger.service')
const noteService = require('./note.service')

module.exports = {
  removeNote
}

// DELETE
async function removeNote(req, res) {
  try {
    const { id } = req.params
    const removedId = await noteService.remove(id)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove note', err)
    res.status(500).send({ err: 'Failed to remove note' })
  }
}