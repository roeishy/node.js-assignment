const logger = require('../../services/logger.service');
const noteDAO = require('./note.DAO');

module.exports = {
  add,
};


async function add(payload) {
  try {
    const { title, content, author } = payload.data;
    return noteDAO.createNote(title, content, author)
  } catch (err) {
    logger.error('cannot insert note', err);
    throw err;
  }
}
