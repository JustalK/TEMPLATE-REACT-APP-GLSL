import React, { Suspense, useRef } from 'react'
import { ROUTE_HOME, ROUTE_SECONDARY } from '@constants/routes'
import Canvas from '@components/Canvas'
import Scroll from '@components/Scroll'
import Panel from '@components/Panel'
import { Route } from 'wouter'
import Home from '@pages/Home'
import Secondary from '@pages/Secondary'

export default function App() {
  const scrollRef = useRef()
  const scroll = useRef(0)
  const slides = 3
  const doScroll = (e) => {
    scroll.current =
      (slides * e.target.scrollTop) /
      (e.target.scrollHeight - window.innerHeight)
  }

  const scrollTop = () => {
    scrollRef.current.scrollTop = 0
  }

  return (
    <div id="canvas-container">
      <Canvas scrollRef={scrollRef}>
        <Suspense fallback={null}>
          <Scroll scroll={scroll}>
            <Route path={ROUTE_SECONDARY}>
              <Secondary />
            </Route>
            <Route path={ROUTE_HOME}>
              <Home scrollTop={scrollTop} />
            </Route>
          </Scroll>
        </Suspense>
      </Canvas>
      <div ref={scrollRef} onScroll={doScroll} className="scroll">
        <Route path={ROUTE_SECONDARY}>
          <Panel slides={2} />
        </Route>
        <Route path={ROUTE_HOME}>
          <Panel slides={4} />
        </Route>
      </div>
    </div>
  )
}
