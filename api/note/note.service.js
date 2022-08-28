const logger = require('../../services/logger.service');
const noteDAO = require('./note.DAO')

module.exports = {
  query,
  add
};

async function query() {
  try {
    var notes = await noteDAO.getAllNotes();
    return { data: { items: notes } };
  } catch (err) {
    logger.error('cannot find notes', err);
    throw err;
  }
}

async function add(payload) {
  try {
    const { title, content, author } = payload.data;
    return noteDAO.createNote(title, content, author)
  } catch (err) {
    logger.error('cannot insert note', err);
    throw err;
  }
}

