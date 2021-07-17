import React from 'react'
import { ROUTE_HOME, ROUTE_SECONDARY } from '@constants/routes'
import Scene from '@components/Scene'
import { Route } from 'wouter'
import Home from '@pages/Home'
import Secondary from '@pages/Secondary'

export default function App() {
  return (
    <Scene>
      <Route path={ROUTE_SECONDARY}>
        <Secondary />
      </Route>
      <Route path={ROUTE_HOME}>
        <Home />
      </Route>
    </Scene>
  )
}
