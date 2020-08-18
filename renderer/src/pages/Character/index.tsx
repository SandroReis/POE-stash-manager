import React from 'react'
import './styles.css'
import PrimaryButton from '../../components/PrimaryButton'
import CharacterLayout from '../../components/CharacterLayout'

export default function Character () {
  return (
    <div id="page-character">
      <div>
        <CharacterLayout />
      </div>
      <div>
        <PrimaryButton link="" text="Go back" />
      </div>
    </div>
  )
}
