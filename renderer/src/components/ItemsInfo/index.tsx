import React from 'react'
import './styles.css'

export default function CharacterItem ({ items, itemName, gridClass }) {
  let itemToDisplay
  let characterItem
  if (itemName !== 'Flask') {
    itemToDisplay = items.find(item => item.inventoryId === itemName)
    characterItem = (
      <>
        <div className={`${gridClass} character-item-wrapper`}>
          <img src={itemToDisplay?.icon} alt='' />
        </div>
      </>
    )
  } else {
    const Flasks = items.filter(item => item.inventoryId === 'Flask')
    characterItem = (
      <div className={`${gridClass} flask-container`}>
        {Flasks.map(flask => (
          <>
            <img src={flask?.icon} alt='' />
          </>
        ))}
      </div>
    )
  }
  return characterItem
}
