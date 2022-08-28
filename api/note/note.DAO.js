const db = require('../../db/db');

module.exports = {
    createNote,
};

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