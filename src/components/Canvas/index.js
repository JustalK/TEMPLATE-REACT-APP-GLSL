import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

const Scene = ({ children, scrollRef }) => {
  return (
    <div id="canvas-container">
      <Canvas
        onCreated={(state) => state.events.connect(scrollRef.current)}
        raycaster={{
          computeOffsets: ({ clientX, clientY }) => {
            return {
              offsetX: clientX,
              offsetY: clientY
            }
          }
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
