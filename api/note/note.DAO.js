const db = require('../../db/db');

module.exports = {
    getAllNotes,
    createNote,
    deleteNote
};

async function deleteNote(id) {
    await db('note').where('id', id).update({ is_deleted: true });

async function getAllNotes() {
    const notes = await db('note').select('id', 'title', 'content', 'author', 'date').where('is_deleted', false).from('note');
    return notes;
    }

async function createNote(title, content, author) {
    const id = await db('note')
        .insert({
            title,
            content,
            author,
            is_deleted: false
        })
        .returning('id');

    return id;
}