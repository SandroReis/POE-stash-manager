import React from 'react'
import useAxiosGet from '../../Hooks/HttpRequests'
import Loader from '../../components/Loader/Loader'
import './styles.css'

export default function CharacterLayout () {
    const accountName = 'plopts'
    const characterName = 'gODDWarrior'
    const url = `https://cors-anywhere.herokuapp.com/https://www.pathofexile.com/character-window/get-items?accountName=${accountName}&character=${characterName}`
  
    const characterInfo = useAxiosGet(url)
  
    let content = null
  
    if (characterInfo.error) {
      content = <p>There was an error... please refresh or try again</p>
    }
  
    if (characterInfo.loading) {
      content = <Loader />
    }
  
    if (characterInfo.data) {
      console.log(characterInfo.data)
      const { character, items } = characterInfo.data
      content = (
        <div>
          <div className="content-wrapper">
            <h2>Character Name: {character.name}</h2>
            <p>League: {character.league}</p>
            <p>Class: {character.class}</p>
            <p>Level: {character.level}</p>
          </div>
          <div className="items-wrapper">
            {items.map((item) => {
              return (
                <div className="each-item-wrapper">
                  <p>{item.name}</p>
                  <img src={item.icon} />
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  return (
    <div>
      {content}
    </div>
  )
}
