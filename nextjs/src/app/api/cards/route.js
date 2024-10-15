import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Fungsi untuk menangani request GET
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM cards');
    return NextResponse.json(result.rows); // Kirim hasil query dalam format JSON
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}