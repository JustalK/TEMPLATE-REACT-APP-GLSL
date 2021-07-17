/**
 * The module managing the home page
 * @module Home
 */
import React, { useRef, useEffect } from 'react'
import Transitions from '@components/Transition'
import { ROUTE_HOME } from '@constants/routes'

const pageSlides = 2

export default function Home({ loadedPage }) {
  const activated = useRef(false)

  useEffect(() => {
    loadedPage(pageSlides)
  }, [])

  return (
    <>
      <Transitions
        pageSlides={pageSlides}
        activated={activated}
        route={ROUTE_HOME}
      />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh position={[0, 0, 0]} onClick={() => (activated.current = true)}>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
    </>
  )
}
