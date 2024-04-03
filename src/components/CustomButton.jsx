import React from 'react'

export default function CustomButton(props) {
  return (
   <button className='px-2 bg-orange-700 rounded-3xl w ' onClick={props.handleClick}>
  {props.title}
   </button>
  )
}
