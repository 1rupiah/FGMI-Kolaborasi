import { Pool } from 'pg';
import { NextResponse } from 'next/server';

// Buat koneksi ke database PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ambil URL dari environment variable
  ssl: {
    rejectUnauthorized: false, // Jika database menggunakan SSL
  },
});

// Fungsi untuk menangani request GET
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM cards'); // Query ke database
    return NextResponse.json(result.rows); // Kirim hasil query dalam format JSON
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}