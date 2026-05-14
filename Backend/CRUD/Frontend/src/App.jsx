import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [notes, setNotes] = useState([])

  function fetchNotes() {
    axios.get("http://localhost:3000/notes").then((response) => {
      setNotes(response.data.notes)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    axios.post("http://localhost:3000/notes", { title, description }).then((response) => {
      fetchNotes()
    }).catch((error) => {
      console.log(error)
    })
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/notes/${id}`).then((response) => {
      fetchNotes()
    }).catch((error) => {
      console.log(error)
    })
  }

  function handleUpdate(id) {
    const title = prompt("Enter new title");
    const description = prompt("Enter new description");
    
    axios.put(`http://localhost:3000/notes/${id}`, { title, description }).then((response) => {
      fetchNotes()    
    }).catch((error) => {
      console.log(error)
    })
  }
  

  return (
    <>
      <form className="note-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter title" />
        <input name="description" type="text" placeholder="Enter description" />
        <button type="submit">Create Note</button>
      </form>
      <div className="notes">
        {
          notes.map((note) => {
            return (
              <div className="note">
                <h1>{note.title}</h1>

                <p>{note.description}</p>

                <button onClick={() => {
                  handleDelete(note._id)
                }}>Delete</button>

                <button onClick={() => {
                  handleUpdate(note._id)
                }}>Update</button>

              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
