/**
 * The module managing the home page
 * @module Home
 */
import React, { useRef } from 'react'
import Transitions from '@components/Transition'
import { ROUTE_HOME } from '@constants/routes'

export default function Home() {
  const activated = useRef(false)

  return (
    <>
      <Transitions activated={activated} route={ROUTE_HOME} />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh position={[0, 0, 0]} onClick={() => (activated.current = true)}>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
    </>
  )
}
