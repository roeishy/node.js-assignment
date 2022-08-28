const logger = require('../../services/logger.service');
const noteDAO = require('./note.DAO')

module.exports = {
  remove,
};

async function remove(noteId) {
  try {
    noteDAO.deleteNote(noteId);
    return noteId;
  } catch (err) {
    logger.error(`cannot remove note ${noteId}`, err);
    throw err;
  }
}