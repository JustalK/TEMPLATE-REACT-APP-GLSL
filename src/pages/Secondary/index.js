/**
 * The module managing the home page
 * @module Home
 */
import React, { useRef, useEffect } from 'react'
import Transitions from '@components/Transition'
import { ROUTE_HOME } from '@constants/routes'

export default function Home({ changePage }) {
  const activated = useRef(false)

  useEffect(() => {
    changePage(2)
  }, [])

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
