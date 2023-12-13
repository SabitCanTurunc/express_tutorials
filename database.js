const notes = [
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
  
}

export function deleteNote(id) {
  
}

