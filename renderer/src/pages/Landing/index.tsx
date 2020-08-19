import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imagens/Path_of_Exile_Logo.png'
import PrimaryButton from '../../components/PrimaryButton'
import PrimaryInput from '../../components/PrimaryInput'

export default function Landing () {
  return (
    <div id="page-landing-main-wrapper">
      <div className="left-landing-page-wrapper">
        <h1>POE Stash Manager</h1>
        <div className="logo-landing-wrapper">
          <img hidden src={Logo} alt="POE-logo" />
        </div>
      </div>
      <div className="right-landing-page-wrapper">
        <div className="content-wrapper">
          <p hidden>tell me your price ...</p>
        </div>
        <div className="form-content">
          <PrimaryInput type="text" label="Account Name" />
          <PrimaryInput type="text" label="Character Name" />
          <PrimaryButton link="character" text="Get Started" />
        </div>
      </div>
    </div>
  )
}
