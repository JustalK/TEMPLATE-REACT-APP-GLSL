import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

const Scene = ({ children }) => {
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
