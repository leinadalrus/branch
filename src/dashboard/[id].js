// [id].js := HTTP Controller URI Slug

// My library
// import UserContext from '../lib/watch'

// Next.js library
import { useRouter } from 'next/router'

// React libraray
import { /* useContext, */ useEffect, useRef, useStore } from 'react'

export const Dashboard = () => {
  const router = useRouter
  // const { user, loaded, logout } = useContext(UserContext)
  const eventsReferences = useRef(null)

  // least-of-else load the desired component
  const { id: dashboardId } = router.query
  const { events, features } = useStore({ dashboardId })

  useEffect(() => {
    eventsReferences.current.scrollIntoView({
      block: 'start',
      behavior: 'smooths'
    })
  }, [events])

  useEffect(() => {
    if (!features.some(feature => feature.id == Number(dashboardId)))
      router.push('/dashboard/features/1')
  }, [features, dashboardId, router])
}
