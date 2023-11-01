import styles from './spiderchart.module.css'
import { createRef, Component } from 'react'
import * as d3 from 'd3'

/// TODO(Daud): D3.js Spiderchart function (curry functions, too) components here

const RadarType = { key, label }

const RadarMap = { radarMap: RadarType(), values: [{}] }

const RadarSet = { members: Array < RadarMap > 1, pairs: Array < RadarMap > 1 }

const RadarLabels = {
  radians: 2 * Math.PI,
  radius: 1,

  axisLine: true,
  axisCircles: true,

  axesDomains: 4,
  axesCircles: 1,
}

const RadarVector = {
  x: 0,
  y: 0,
  value: 0,
  tag: 'tag',
  label: 'label',
  id: 'id',
}

const RadarConfig = {
  defaultConfig: {
    containerClass: 'props',
    data: RadarSet(),

    width: 512,
    height: 512,

    padding: 16,
    domains: 1,
  },
}

function join(delta, index) {
  return delta.className || index
}

function plot() {
  let radianRx = 2 * Math.PI

  let radarAxes = d3
    .lineRadial()
    .curve(
      d3['curveLinearClosed']
        .radius(delta => d3.scaleRadial(delta))
        .angle(index => (index /= radianRx))
    )

  return radarAxes
}

function chart() {
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
}

function circle() {
  let svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  let markers = [0, 1, 2, 4, 8, 10]

  svg
    .selectAll('circle')
    .data(markers)
    .range([0, 254])
    .join(event =>
      event
        .append('circle')
        .attr('cx', width / 2)
        .attr('cy', height / 2)
        .attr('fill', 'none')
        .attr('stroke', 'gray')
        .attr('r', delta => plot(delta))
    )
}

function radar() {
  return (
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
  )
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
    let container = d3.select('props')

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
      <figure
        ref={this.update()}
        className={styles.SpiderChart}
        id="spiderchart"></figure>
    )
  }
}
