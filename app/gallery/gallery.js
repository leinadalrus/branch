import styles from './gallery.module.css'
import Image from 'next/image'
import { useEffect, useMemo, useReducer, useState } from 'react'

/// Dispatch function :=
function useDumbdisposable(disposable, state) {
  const interval = 1000
  const observable = useState(state)
  /// NOTE(useMemo):
  /// const items = useMemo(observable, disposable, interval =>
  /// Array(observable, disposable, interval)
  /// )
  const items = useMemo(() => Array(), [])

  useEffect(() => {
    const timeout = setTimeout(
      () => observable({ type: 'next', items }),
      interval
    )
    return () => clearTimeout(timeout)
  }, [observable, disposable, interval, items])

  useEffect(() => {
    const timeout = setTimeout(
      () => observable({ type: 'previous', items }),
      interval
    )
    return () => clearTimeout(timeout)
  }, [observable, disposable, interval, items])
}

function next(slides, state) {
  slides = document.querySelector('.Slides')

  for (let index = 0; index < slides.length; index++)
    slides[index].style.display = state
}

function previous(slides) {
  slides = document.querySelector('.Slides')

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slides.clientWidth)}`
  })
}

/// Each action describes a single user interaction,
/// even if that leads to multiple changes in the data.
/// If you log every action in a reducer,
/// that log should be clear enough for you to reconstruct what interactions
/// or responses happened in what order.
/// This helps with debugging!
function useDispatchRed(state, action) {
  useDumbdisposable(state, action)

  switch (action.type) {
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

const ImageMediums = [
  {
    id: 0,
    title: 'Hello World',
    description: 'An image of an iterable item.',
  },
]

export const Gallery = () => {
  const ObservedState = {
    expected: 0,
    observed: 0,
  }

  const medias = ImageMediums.map(media => {
    <li key={media.id}>
      <Image
        className={styles.GalleryCard}
        src={dispose() ? observe() : '/assets/avatars/user-avatar.png'} /// Route of the image file
        height={144} /// Desired size with correct aspect ratio
        width={144} /// Desired size with correct aspect ratio
        alt="Image of a desired item."
      />
    </li>
  })

  /// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
  const [state, dispatch] = useReducer(useDispatchRed, ObservedState)

  function observe() {
    state({ type: 'previous' })
  }

  function dispose() {
    dispatch({ type: 'next' })
  }

  /// Extracting State Logic into a Reducer
  /// Components with many state updates spread across many event handlers can get overwhelming.
  /// For these cases, you can consolidate all the state update logic outside your component in a single function,
  /// called a reducer.

  return (
    <article>
      <Image
        className={styles.GalleryCard}
        src={dispose() ? observe() : '/assets/heads/head-part.png'} /// Route of the image file
        height={144} /// Desired size with correct aspect ratio
        width={144} /// Desired size with correct aspect ratio
        alt="Image of a desired item."
      />
      <ul>{medias}</ul>
    </article>
  )
}
