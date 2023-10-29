import styles from './spiderchart.module.css'
import { createRef, Component } from 'react'
import * as d3 from 'd3'

/// TODO(Daud): D3.js Spiderchart function (curry functions, too) components here

const SpiderChartFactory = {
  defaultConfig: {
    containerClass: 'props',
    data,
    width: 512,
    height: 320,
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

  chart() {
    const xAxis = useRef()
    const yAxis = useRef()

    const deltaX = d3.scaleRadial([0, data.length - 1], [width])
    const deltaY = d3.scaleRadial([0, data.length - 1], [height])

    useEffect(
      () => void d3.select(xAxis.current).call(d3.axisBottom(deltaX)),
      [xAxis, deltaX]
    )
    useEffect(
      () => void d3.select(yAxis.current).call(d3.axisBottom(deltaY)),
      [yAxis, deltaY]
    )
  },

  radar() {
    return (
      <>
        <svg width={width} height={height}>
          <g ref={xAxis} transform={`translate(0,${height})`} />
          <g ref={yAxis} transform={`translate(${width},0)`} />
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            delta={d3.line(iterable => deltaX(iterable), deltaY)}
          />
          <g fill="white" stroke="currentColor" stroke-width="1.5">
            {data.map((delta, iterable) => (
              <circle key={iterable} cx={x(iterable)} cy={y(delta)} r="2.5" />
            ))}
          </g>
        </svg>
      </>
    )
  },
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
    let spiderChart = new SpiderChartFactory()
    let container = d3.select(spiderChart.defaultConfig.containerClass)

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
          ref={update()}
          className={styles.SpiderChart}
          id="spiderchart"></figure>
      </>
    )
  }
}
