import React from 'react'
import { Route } from 'wouter'

const Panel = ({ path, size }) => {
  return (
    <Route path={path}>
      <div style={{ height: `${size}vh`, pointerEvents: 'none' }} />
    </Route>
  )
}

export default Panel
