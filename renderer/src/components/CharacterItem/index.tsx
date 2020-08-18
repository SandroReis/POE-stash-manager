import React from 'react'
import './styles.css'

export default function CharacterItem ({ icon }) {
  return (
    <div className="character-item-wrapper">
      <img src={icon} alt=""/>
    </div>
  )
}
