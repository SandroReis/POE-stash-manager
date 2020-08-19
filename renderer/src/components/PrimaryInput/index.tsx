import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const PrimaryInput: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="primary-input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  )
}

export default PrimaryInput

