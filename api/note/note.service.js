const logger = require('../../services/logger.service');
const noteDAO = require('./note.DAO')

module.exports = {
  query,
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