import React from 'react'

const Panel = ({ slides }) => {
  return <div style={{ height: `${slides * 100}vh`, pointerEvents: 'none' }} />
}

export default Panel
