const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fgmi_database',
  password: '1rupiah_1rupiah_',
  port: 5432,
  ssl: false,  // Nonaktifkan SSL untuk koneksi lokal
});

// Penggunaan pool
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log('Query result:', res.rows);
  }
  pool.end();
});