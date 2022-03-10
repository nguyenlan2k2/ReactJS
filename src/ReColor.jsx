import React, { useState } from 'react'

const ReColor = () => {
  const [color, setColor] = useState('blue')

  const handleColor = () => {
    setColor('salmon')
  }
  return (
    <div>
      <h1 style={{color}}>click de chu doi mau</h1>
      <button onClick={handleColor}>Change</button>
    </div>
  )
}

export default ReColor;