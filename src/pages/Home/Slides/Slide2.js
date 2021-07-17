import React from 'react'
import { useThree } from '@react-three/fiber'

const Slide2 = ({ handleOnClick }) => {
  const { viewport } = useThree()

  return (
    <mesh position={[0, -viewport.height, 0]} onClick={handleOnClick}>
      <boxGeometry />
      <meshPhongMaterial />
    </mesh>
  )
}

export default Slide2
