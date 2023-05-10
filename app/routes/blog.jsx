import { Link } from '@remix-run/react'

import styles from '../styles/blog.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Blog() {
  return <h1>Blog <Link to="/dashboard">Dashboard</Link> | <Link to="/">Home</Link></h1>
}
