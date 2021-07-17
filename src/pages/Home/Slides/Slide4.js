import React from 'react'
import { useThree } from '@react-three/fiber'

const Slide4 = ({ handleOnClick }) => {
  const { viewport } = useThree()

  return (
    <mesh position={[0, -3 * viewport.height, 0]} onClick={handleOnClick}>
      <boxGeometry />
      <meshPhongMaterial />
    </mesh>
  )
}

export default Slide4
