const express = require('express');
const { Pool } = require('pg');
const app = express();

// Koneksi ke PostgreSQL
const pool = new Pool({
  user: 'postgres', // Ganti dengan username PostgreSQL Anda
  host: 'localhost', // Jika server lokal
  database: 'fgmi_database', // Nama database yang telah Anda buat
  password: '1rupiah_1rupiah_', // Ganti dengan password PostgreSQL Anda
  port: 5432, // Port default PostgreSQL
});

// Route untuk mengambil data dari tabel 'cards'
app.get('/cards', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cards');
    res.json(result.rows); // Kirim data dalam format JSON
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Menjalankan server di port 5000
app.listen(5000, () => {
  console.log('Server running on port 5000');
});