const logger = require('../../services/logger.service')
const noteService = require('./note.service')

module.exports = {
  getNotes,
  addNote,
}

async function getNotes(req, res) {
  try {
    const notes = await noteService.query()
    res.json(notes)
  } catch (err) {
    logger.error('Failed to get notes', err)
    res.status(500).send({ err: 'Failed to get notes' })

// CREATE
async function addNote(req, res) {
  try {
    var note = req.body
    const addedNoteId = await noteService.add(note)
    res.json(addedNoteId)
  } catch (err) {
    logger.error('Failed to add note', err)
    res.status(500).send({ err: 'Failed to add note' })
  }
}