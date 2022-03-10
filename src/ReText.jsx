import React, { useState } from 'react'

const ReText = () => {
  const [text, setText] = useState('HIT')
  const handleText = () => {
    setText('I LOVE YOU')
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleText}>Change</button>
    </div>
  )
}

export default ReText;