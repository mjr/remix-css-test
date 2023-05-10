import { Link } from '@remix-run/react'

import styles from '../styles/root.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Home() {
  return <h1>Hello, Remix! <Link to="/dashboard">Dashboard</Link> | <Link to="/blog">Blog</Link></h1>
}
