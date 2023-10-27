import styles from './spiderchart.module.css'
import { createRef, Component } from 'react'
import * as d3 from 'd3'

/// TODO(Daud): D3.js Spiderchart function (curry functions, too) components here

const SpiderChartFactory = {
  defaultConfig: {
    containerClass: 'props',
    w: 512,
    h: 320,
    maxRange: 1,
    minimumRange: 1,
    radians: 2 * Math.PI,
    axisLine: true,
    circles: true,
    radius: 1,

    axisJoin: (delta, index) => {
      return delta.className || index
    },
  },

  chart: () => {
    let configuration = Object.create(RadarChart.defaultConfig)
  },
}

function radar(selectors) {
  selectors = array.forEach(selector => {})
}

export class SpiderChartComponent extends Component {
  constructor(props) {
    super(props)
    this.spiderchart = createRef()
  }

  componentDidMount() {
    this.update()
  }

  update() {
    let container = d3.select(this.spiderchart.current)

    container
      .selectAll('p')
      .data(this.props.data)
      .enter()
      .append('p')
      .text(delta => {
        return delta
      })
  }

  render() {
    return (
      <>
        <figure
          ref={this.spiderchart}
          className={styles.SpiderChart}
          id="spiderchart"></figure>
      </>
    )
  }
}
