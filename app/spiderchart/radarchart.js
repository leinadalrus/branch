'use client'

import { SpiderChartComponent, Watch } from './spiderchart.component'
import { useMemo, useReducer } from 'react'

/// TODO(Daud): D3.js Spiderchart function (curry functions, too) components here

export const RadarChart = () => {
  const ObservedState = {
    expected: 0,
    observed: 0,
  }

  /// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
  const [observed, disposed] = useMemo(() => {
    /// Extracting State Logic into a Reducer
    /// Components with many state updates spread across many event handlers can get overwhelming.
    /// For these cases, you can consolidate all the state update logic outside your component in a single function,
    /// called a reducer.
    useReducer(Watch, ObservedState)
  })

  return <SpiderChartComponent />
}
