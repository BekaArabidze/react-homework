import React from 'react'

const Button = ({event,handleEvent}) => {
  return (
    <>
        <button onClick={handleEvent}>{event}</button>
    </>
  )
}

export default Button