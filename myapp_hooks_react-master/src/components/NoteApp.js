

import React,{ Component, useState } from "react"
const NoteApp=()=>{
  const [notes,setNotes]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const [city,setCity]=useState('')
  const addNote=(e)=>{
    e.preventDefault()
    {
      setNotes([...notes,{title,body,city}])
      setTitle('')
      setBody('')
      setCity('')
    }
  }
  const removeNote=(title)=>{
    setNotes(notes.filter((note)=>note.title!==title))
  }
  return (
    <div>
    <h1>Notes</h1>
    {notes.map((note)=>(
      <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{note.city}</p>
      <button onClick={()=>removeNote(note.title)}>X</button>

  </div>
    ))}
<p>Add node</p>
<form onSubmit={addNote}>
<input   value={title} onChange={(e)=>setTitle(e.target.value)}/>
<textArea value={body} onChange={(e)=>setBody(e.target.value)}></textArea>
<input   value={city} onChange={(e)=>setCity(e.target.value)}/>
<button>add node</button>
</form>
</div>
)

}
  export default NoteApp
