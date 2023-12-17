/*let notes = [
  {
    id: 1,
    title: "My first Note",
    timestamp: Date.now(),
    contents: "Thinking longingly about tuna brine..."
  },
  {
    id: 2,
    title: "My second note",
    timestamp: Date.now(),
    contents: "A feathery toy scream for no reason at 4 am..."
  }
];



export function getNotes() {
  return notes;
}

export function getNote(id) {
  return notes.find((note) => note.id === id);
}

export function addNote(note) {
  notes.push({
    ...note,
    id: notes.length +1,
    timestamp: Date.now()

  })
}

export function deleteNote(id) {
  notes = notes.filter((note)=> note.id !== id)
}
*/


import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DASTBASE
}).promise()

export async function getNotes() {
  const [rows] = await pool.query("SELECT * FROM notes")
  return rows
}

export async function getNote(id) {

  console.log("sfd")
  const [rows] = await pool.query(
    `SELECT * FROM notes
    WHERE id= ?`, [id]
  )
  console.log("sfsdd")

  return rows
}

export async function addNote(title, content) {
    
    await pool.query(
    `INSERT INTO notes (title, contents)
    VALUES(?,?)`, [title, content]
  )

}


