import React from 'react'
import styled from 'styled-components'

import Ship from './Ship'

const ShipContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  height: 150px;
`

const Shipyard = ({ships, selectShip, selectedShip}) => {

  return (
    <ShipContainer>
      {Object.keys(ships).map(ship => 
        <Ship 
          ship={ships[ship]} 
          key={ships[ship].id}
          selectShip={selectShip}
          selected={selectedShip.id === ships[ship].id}
        />)}
    </ShipContainer>
  )
}

export default Shipyard