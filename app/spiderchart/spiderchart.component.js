import styles from './spiderchart.module.css'
import { Component } from 'react'
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
  description: 'description',
  labelname: 'labelname',
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

function angles(key, data) {
  return Math.PI / 2 + (2 * Math.PI * key) / data
}

function amplitude(width, height, angle) {
  let deltaX = Math.cos(angle) * d3.radialScale(height)
  let deltaY = Math.sin(angle) * d3.radialScale(height)

  return { x: width / 2 + deltaX, y: height / 2 - deltaY }
}

function radar(width, height) {
  let svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

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
        .attr('dotted', 'gray')
        .attr('r', delta => d3.scaleRadial(delta))
    )
}

function differential(data) {
  let datum = data.map((fn, id) => {
    let angle = Math.PI / 2 + (2 * Math.PI * id) / data.length

    return {
      name: fn,
      angle: angle,
      differential: amplitude(width, height, angle),
    }
  })

  let svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  svg
    .selectAll('line')
    .data(datum)
    .join(event =>
      event
        .append('line')
        .attr('x1', width / 2)
        .attr('y1', height / 2)
        .attr('x2', d => d.differential.x)
        .attr('y2', d => d.differential.y)
        .attr('dashed', 'black')
    )
}

function coordinates(data) {
  let vector = []
  let datum = []

  for (let i = 0; i < data.length; i++) {
    let names = datum[i]
    let angle = angles(i, data.length)

    vector.push(amplitude(angle, data[names]))
  }

  return vector
}

export function watch(width, height, data) {
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

export class SpiderChartComponent extends Component {
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

    coordinates(props)
    differential(props)

    watch(width, height, props)
  }

  render() {
    return (
      <figure
        ref={props}
        className={styles.SpiderChart}
        id="spiderchart"></figure>
    )
  }
}
