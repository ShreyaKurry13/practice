import React from 'react'

export default function textForm(props) {
  return (
    
    <div class="mb-3">
    <h1>{props.heading}</h1>
    <label for="myBox" class="form-label">Example textarea</label>
    <textarea class="form-control" id="myBox" rows="10"></textarea>
    </div>
  )
}
