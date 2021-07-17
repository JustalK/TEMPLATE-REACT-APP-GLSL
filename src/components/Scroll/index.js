import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

const smoothLevel = 0.15

export default function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree()
  const group = useRef()
  const vec = new THREE.Vector3()
  useFrame(() =>
    group.current.position.lerp(
      vec.set(0, viewport.height * scroll.current, 0),
      smoothLevel
    )
  )
  return <group ref={group}>{children}</group>
}
