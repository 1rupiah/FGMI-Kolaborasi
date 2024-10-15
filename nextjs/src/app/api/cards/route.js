import { NextResponse } from 'next/server';
import { Pool } from 'pg';
require('dotenv').config();  // Memuat variabel dari .env

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

export async function GET() {
  try {
    console.log('Running database query...');
    const result = await pool.query('SELECT * FROM cards');
    console.log('Query result:', result.rows);
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('Error querying database:', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}