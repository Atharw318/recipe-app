import React from 'react'
import "./Recipe.css"

function Recipe(props) {
  return (
    <div className='rep'>
        <h1>{props.title}</h1>
        <ol>
            {props.ingredients.length > 0 && props.ingredients.map((data,index) => (
                <li key={index}>{data}</li>
            ))}
        </ol>
        <p className='rep-p'>calories: {props.calories}</p>
        <img className='image' src={props.image} alt="" />
    </div>
  )
}

export default Recipe