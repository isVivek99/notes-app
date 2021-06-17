import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../styles/notesinput.css";

export default function NotesInput() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    const {name, value} = e.target;
    console.log(name,);
    console.log([name]);
    setNote(preValue => {
      console.log(name);
     return {
        ...preValue,
          [name]:value,
      }
    })
  }

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  }

  return (
    <div className="input">
      <form action="">
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <p>
          <textarea
            name="content"
            placeholder="Take a note..."
            value={note.content}
            onChange={handleChange}
          ></textarea>
        </p>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
