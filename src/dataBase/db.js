const { Pool } = require('pg');

const pool = new Pool({
    user: 'julio',
    host: 'localhost',
    database: 'refund',
    password: 'JCFA2711',
    port: 5432,
});

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection error', err));

module.exports = pool;
