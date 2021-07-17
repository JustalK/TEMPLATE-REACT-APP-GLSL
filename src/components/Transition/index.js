import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useLocation } from 'wouter'
import transitionMaterial from './Materials'

const Transition = ({ activated, route }) => {
  const location = useLocation()
  const setLocation = location[1]
  const ref = useRef()
  const { viewport } = useThree()

  useFrame((state, delta) => {
    if (activated.current && ref.current.uVelo === 2) {
      setLocation(route)
    } else {
      ref.current.uVelo = activated.current
        ? Math.min(ref.current.uVelo + delta, 2)
        : Math.max(ref.current.uVelo - delta, 0)
    }
  })

  return (
    <mesh position={[0, 0, 1]}>
      <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
      <transitionMaterial ref={ref} transparent />
    </mesh>
  )
}

export default Transition
