'use client'

import { radar, coordinates, differential } from './spiderchart.module'
import styles from './spiderchart.module.css'

// External libraries:
import { Component } from 'react'

export class SpiderChart extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.update()
  }

  update() {
    let width = 254,
      height = 254
    radar(width, height)

    coordinates(this.props)
    differential(this.props)

    // Watch(width, height, RadarConfig)
  }

  render() {
    return (
      <figure
        ref={this.props}
        className={styles.SpiderChartContainer}
        id="spiderchart"></figure>
    )
  }
}
