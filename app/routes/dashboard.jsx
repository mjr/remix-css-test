import { Link } from '@remix-run/react'

import styles from '../styles/dashboard.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Dashboard() {
  return <h1>Dashboard <Link to="/">Home</Link> | <Link to="/blog">Blog</Link></h1>
}
