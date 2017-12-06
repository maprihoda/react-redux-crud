import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className="container">
      <div className="error-page">
        <h1>Oops, something went wrong</h1>
        <div>Start at <Link to="/">the beginning</Link></div>
      </div>
    </div>
  )
}
