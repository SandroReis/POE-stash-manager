import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function PrimaryButton ({ link, text }) {
  return (
    <Link to={`/${link}`}>
      <div className="primary-button-wrapper">
        <a>{text}</a>
      </div>
    </Link>
  )
}
