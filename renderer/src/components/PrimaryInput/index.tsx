import React from 'react'
import './styles.css'

export default function PrimaryInput ({ type, placeholder = '', label }) {
  return (
      <div className="primary-input-wrapper">
        <span>{label}</span>
        <input type={type} placeholder={placeholder}/>
      </div>
  )
}
