import React, { useState } from 'react'

export default function Textform(props) {

  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!" , "success");
  }

  const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!" , "success");
  }

  const handleClearClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    props.showAlert("Cleared the text!" , "success");
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied the text!" , "success");
  }

  const handleExtraSpaces = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!" , "success");
  }

  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('')

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox"  rows="10" ></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
