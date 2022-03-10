import React, { useState } from 'react'

const ReNumber = () => {
  const [number, setNumber] = useState(0)
  const handleNumber = () => {
    setNumber(number + 1)
  }
  return (
    <div>        
      <h1>{number}</h1>
      <button onClick={handleNumber}>Up!!!</button>
    </div>
  )
}

export default ReNumber;