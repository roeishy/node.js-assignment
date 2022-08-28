const db = require('../../db/db');

module.exports = {
    getAllNotes
};

async function getAllNotes() {
    const notes = await db('note').select('id', 'title', 'content', 'author', 'date').where('is_deleted', false).from('note');
    return notes;
}