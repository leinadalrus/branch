import styles from './gallery.module.css'
import Image from 'next/image'
import { useEffect, useMemo, useReducer, useState } from 'react'

/// Dispatch function :=
function dumbDispose(state, dispose) {
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

/// Each action describes a single user interaction, 
/// even if that leads to multiple changes in the data.
/// If you log every action in a reducer, 
/// that log should be clear enough for you to reconstruct what interactions 
/// or responses happened in what order. 
/// This helps with debugging!
function dispatchRed(state, action) {
  dumbDispose(state, action)

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

  /// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
  const [observed, disposed] = useMemo(() => {
    /// Extracting State Logic into a Reducer
    /// Components with many state updates spread across many event handlers can get overwhelming. 
    /// For these cases, you can consolidate all the state update logic outside your component in a single function, 
    /// called a reducer.
    useReducer(dispatchRed, ObservedState)
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
