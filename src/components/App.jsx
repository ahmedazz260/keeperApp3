import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(notes);

    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  }
  function deleteNote(theNote, noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== noteId;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDel={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
