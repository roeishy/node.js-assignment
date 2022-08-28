/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('note', table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('content').notNullable();
        table.string('author').notNullable();
        table.timestamp('date').defaultTo(knex.fn.now())
        table.boolean('is_deleted').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('note');
};
