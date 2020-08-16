import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Character () {
  return (
    <div id="page-character">
      <h1>Character pagessssss ...</h1>
      <Link to="/" className="primary-button">
        <a className="primary-button">Go back</a>
      </Link>
    </div>
  )
}
