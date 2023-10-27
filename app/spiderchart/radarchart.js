import styles from './spiderchart.module.css'
import { createRef, Component } from 'react'
import * as d3 from 'd3'
import { SpiderChartComponent } from './spiderchart.component'

/// TODO(Daud): D3.js Spiderchart function (curry functions, too) components here

export const RadarChart = () => {
  return (
    <>
      <SpiderChartComponent />
    </>
  )
}
