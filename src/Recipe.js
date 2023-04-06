import React from 'react'

function Recipe({title,calories,image}) {
  return (
    <div className='recipe-card'>
         <img src={image} alt='' />
        <h1 className='text'>{title}</h1>
        <p>{calories}</p>
       
    </div>
  )
}

export default Recipe