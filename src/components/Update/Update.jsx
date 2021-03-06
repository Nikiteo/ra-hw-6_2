import React from 'react';
import axios from 'axios';

const URL = process.env.REACT_APP_NOTES_URL;

export default function Update({ title, onClick }) {
  const updateNote = () => axios.get(URL).then((res) => onClick(res.data))

  return (
    <div className="Update">
      <h2>{title}</h2>
      <button onClick={updateNote}>⭮</button>
    </div>
  )
};