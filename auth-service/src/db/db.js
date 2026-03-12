const { Pool } = require('pg');
const fs   = require('fs');
const path = require('path');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://auth_user:auth_secret@auth-db:5432/auth_db'
});

async function initDB() {
  const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
  await pool.query(sql);
  console.log('[auth-db] Tables initialized');
}

module.exports = { pool, initDB };
