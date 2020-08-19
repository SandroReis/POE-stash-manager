import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imagens/Path_of_Exile_Logo.png'
import PrimaryInput from '../../components/PrimaryInput'

export default function Landing () {
  const [accountName, setAccountName] = useState('')
  const [characterName, setCharacterName] = useState('')

  return (
    <div id='page-landing-main-wrapper'>
      <div className='left-landing-page-wrapper'>
        <h1>POE Stash Manager</h1>
        <div className='logo-landing-wrapper'>
          <img hidden src={Logo} alt='POE-logo' />
        </div>
      </div>
      <div className='right-landing-page-wrapper'>
        <div className='content-wrapper'>
          <p hidden>tell me your price ...</p>
        </div>
        <form className='form-content'>
          <PrimaryInput
            name='account'
            type='text'
            label='Account Name'
            onChange={e => setAccountName(e.target.value)}
          />
          <PrimaryInput
            name='character'
            type='text'
            label='Character Name'
            onChange={e => setCharacterName(e.target.value)}
          />
          <Link to={`/character/${accountName}/${characterName}`}>
            <button type='submit'>Get Started</button>
          </Link>
        </form>
      </div>
    </div>
  )
}
