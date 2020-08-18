import React from 'react'
import './styles.css'

export default function Loader () {
  return (
    <div className="loader-wrapper">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
