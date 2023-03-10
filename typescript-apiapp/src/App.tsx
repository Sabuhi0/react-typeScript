import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListNotes from './components/ListNotes';
import { Note } from './note.model';

function App() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setNotes(data))
    .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        <ListNotes notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
}

export default App;
