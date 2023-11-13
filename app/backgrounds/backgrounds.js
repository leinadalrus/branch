import Image from 'next/image'
import styles from './backgrounds.module.css'

const ViewSource = {
  filepath: '/assets/bg/bg-main.png',
}

export const BackgroundImage = () => {
  const viewSource = ViewSource

  return (
    <>
      <div className={styles.Backdrop}>
        <Image
          alt="User Background Image"
          src={viewSource.filepath}
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  )
}
