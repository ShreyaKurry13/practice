import React, { useState } from 'react'

export default function Textform(props) {

  const handleUpClick = () =>{
    console.log("Uppercase was clicked");
    setText("You have clicked on handleUpClick")
  }

  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here2')

  return (
    <div>
    <h1>{props.heading}</h1>

    <div class="mb-3">
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
