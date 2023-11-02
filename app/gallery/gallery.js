import styles from './gallery.module.css'
import Image from 'next/image'
import { useEffect, useMemo, useReducer, useState } from 'react'

function DumbDispose(state, dispose) {
  let items = new Array()
  let interval = 500

  useEffect(() => {
    const timeout = setTimeout(() => dispose({ type: 'next', items }), interval)
    return () => clearTimeout(timeout)
  }, state.observed)

  useEffect(() => {
    const timeout = setTimeout(
      () => dispose({ type: 'previous', items }),
      interval
    )
    return () => clearTimeout(timeout)
  }, state.observed)

  useEffect(() => {
    const timeout = setTimeout(() => dispose({ type: 'done' }), interval)
    return () => clearTimeout(timeout)
  }, state.expected)
}

function ReduceEnumerables(state, action) {
  DumbDispose(state, action)

  switch (action.type) {
    case 'jump':
      return {
        ...state,
        expected: action.expected,
      }
    case 'next':
      return {
        ...state,
        expected: next(action.length, state.observed),
      }
    case 'previous':
      return {
        ...state,
        expected: previous(action.length, state.observed),
      }
    default:
      return state
  }
}

export const Gallery = () => {
  const ObservedState = {
    expected: 0,
    observed: 0,
  }
  const [observe, dispose] = useMemo(() => {
    useReducer(ReduceEnumerables, ObservedState)
  })
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
        <Image
          className={styles.GalleryCard}
          src="assets/heads/head-part.png" /// Route of the image file
          height={144} /// Desired size with correct aspect ratio
          width={144} /// Desired size with correct aspect ratio
          alt="Image of a desired item."
        />
  )
}
