import Image from 'next/image'
// import styles from './backgrounds.module.css' // un/comment this when you need it

// Expo
// import { useMemo } from 'react'

const ViewSource = {
  filepath: '/public/assets/bg/bg-main.png'
}

export const BackgroundImage = () => {
  const viewSource = ViewSource

  return (
    <>
      <Image
        alt="User Background Image"
        src={viewSource.filepath}
        quality={100}
        sizes="100vw"
        style={styles.backgroundViewWrapper}
        fill
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flex: 1
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black'
  },

  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
})
