import React from 'react'
import useAxiosGet from '../../Hooks/HttpRequests'
import Loader from '../../components/Loader/Loader'
import './styles.css'
import CharacterItem from '../CharacterItem'
// import * as HandleItems from './handleItems.jsx'

export default function CharacterLayout ({characterName, accountName}) {
  function selectBelt (itemsArray) {
    const belt = itemsArray.find((item) => item.inventoryId === 'Belt')
    const item = <CharacterItem icon={belt.icon} />
    return item || null
  }

  function selectPrimaryWeapon (itemsArray) {
    const primaryWeapon = itemsArray.find((item) => item.inventoryId === 'Weapon')
    const item = <CharacterItem icon={primaryWeapon.icon} />
    return item || null
  }

  function selectPrimaryWeapon2 (itemsArray) {
    const primaryWeapon2 = itemsArray.find(
      (item) => item.inventoryId === 'Weapon2'
    )
    const item = <CharacterItem icon={primaryWeapon2.icon} />
    return item || null
  }

  function selectPrimaryRing (itemsArray) {
    const primaryRing = itemsArray.find((item) => item.inventoryId === 'Ring')
    const item = <CharacterItem icon={primaryRing.icon} />
    return item || null
  }

  function selectOffHand (itemsArray) {
    const offHand = itemsArray.find((item) => item.inventoryId === 'Offhand')
    const item = <CharacterItem icon={offHand.icon} />
    return item || null
  }

  function selectOffHand2 (itemsArray) {
    const offHand2 = itemsArray.find((item) => item.inventoryId === 'Offhand2')
    const item = <CharacterItem icon={offHand2.icon} />
    return item || null
  }

  function selectGloves (itemsArray) {
    const gloves = itemsArray.find((item) => item.inventoryId === 'Gloves')
    const item = <CharacterItem icon={gloves.icon} />
    return item || null
  }

  function selectBoots (itemsArray) {
    const Boots = itemsArray.find((item) => item.inventoryId === 'Boots')
    const item = <CharacterItem icon={Boots.icon} />
    return item || null
  }

  function selectAmulet (itemsArray) {
    const Amulet = itemsArray.find((item) => item.inventoryId === 'Amulet')
    const item = <CharacterItem icon={Amulet.icon} />
    return item || null
  }

  function selectHelm (itemsArray) {
    const Helm = itemsArray.find((item) => item.inventoryId === 'Helm')
    const item = <CharacterItem icon={Helm.icon} />
    return item || null
  }

  function selectRing2 (itemsArray) {
    const Ring2 = itemsArray.find((item) => item.inventoryId === 'Ring2')
    const item = <CharacterItem icon={Ring2.icon} />
    return item || null
  }

  function selectFlasks (itemsArray) {
    const Flasks = itemsArray.filter((item) => item.inventoryId === 'Flask')
    console.log('Flasks', Flasks)
    const item = (
      <div className="flask-container">
        {Flasks.map((flask) => (
          <>
            
            <img src={flask.icon} alt="" />
          </>
        ))}
      </div>
    )
    return item || null
  }

  function selectBodyArmour (itemsArray) {
    const BodyArmour = itemsArray.find(
      (item) => item.inventoryId === 'BodyArmour'
    )
    const item = <CharacterItem icon={BodyArmour?.icon} />
    return item || null
  }
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
        <div className="grid-container">
          <div className="FLASKS">{selectFlasks(items)}</div>
          <div className="BELT">{selectBelt(items)}</div>
          <div className="GLOVES">{selectGloves(items)}</div>
          <div className="BOOTS">{selectBoots(items)}</div>
          <div className="LEFT-RING">{selectPrimaryRing(items)}</div>
          <div className="RIGHT-RING">{selectRing2(items)}</div>
          <div className="NECKLACE">{selectAmulet(items)}</div>
          <div className="ARMOR">{selectBodyArmour(items)}</div>
          <div className="LEFT-HAND">{selectOffHand(items)}</div>
          <div className="RIGHT-HAND">{selectPrimaryWeapon(items)}</div>
          <div className="HELMET">{selectHelm(items)}</div>
        </div>
      </div>
    )
  }
  return <div>{content}</div>
}
