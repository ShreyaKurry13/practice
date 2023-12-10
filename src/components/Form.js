import React, { useState } from 'react'

export default function Textform(props) {

  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
  }

  const handleCopy = () =>{
    // console.log("Uppercase was clicked" + text);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('')

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>

    <div className="mb-3">
      <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange} rows="10" ></textarea>
    </div>
    <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-4">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
