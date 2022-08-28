const db = require('../../db/db');

module.exports = {
    deleteNote
};

async function deleteNote(id) {
    await db('note').where('id', id).update({ is_deleted: true });
}