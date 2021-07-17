import React from 'react'

const Slide1 = ({ handleOnClick }) => {
  return (
    <mesh position={[0, 0, 0]} onClick={handleOnClick}>
      <boxGeometry />
      <meshPhongMaterial />
    </mesh>
  )
}

export default Slide1
