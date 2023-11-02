'use client'

import { SpiderChartComponent, watch } from './spiderchart.component'
import { useMemo, useReducer } from 'react'

/// TODO(Daud): D3.js Spiderchart function (curry functions, too) components here

export const RadarChart = () => {
  const ObservedState = {
    expected: 0,
    observed: 0,
  }

  const [observed, disposed] = useMemo(() => {
    useReducer(watch, ObservedState)
  })
  
  return (
      <SpiderChartComponent />
  )
}
