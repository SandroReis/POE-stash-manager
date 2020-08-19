import React from 'react'
import './styles.css'
import PrimaryButton from '../../components/PrimaryButton'
import CharacterLayout from '../../components/CharacterLayout'
import { useParams } from "react-router-dom"

export default function Character () {
  const {characterName, accountName} = useParams()
  return (
    <div id="page-character">
      <div className="items-wrapper">
        <CharacterLayout characterName={characterName} accountName={accountName}/>
      </div>
      <div className='back-button-wrapper'>
        <PrimaryButton link="" text="Go back" />
      </div>
    </div>
  )
}
