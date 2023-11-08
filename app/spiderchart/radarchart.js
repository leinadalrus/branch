'use client'

import { SpiderChartComponent, Watch } from './spiderchart.component'
import { useReducer } from 'react'

/// TODO(Daud): D3.js Spiderchart function (curry functions, too) components here

export const RadarChart = () => {
  const ObservedState = {
    expected: 0,
    observed: 0,
  }

  const [state, dispatch] = useReducer(Watch, ObservedState)

  function observe() {
    state({ type: 'previous' })
  }

  function dispose() {
    dispatch({ type: 'next' })
  }

  return <SpiderChartComponent ref={dispose() ? observe() : undefined} />
}
