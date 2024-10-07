import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const FoodCardContainer = styled.div`
  background-color: ${V.Colors.Vermelho};
  padding: 8px;
  color: ${V.Colors.Bege};
`
export const FoodImageContainer = styled.div`
  display: flex;
  position: relative;
`

export const FoodImage = styled.img`
  max-height: 167px;
  object-fit: none;
  overflow: hidden;
  width: 100%;
`

export const FoodTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const Positioner = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
`

export const FoodTitle = styled.h3`
  font-size: ${V.TxSize.G};
  line-height: ${V.lineHeight.G};
  font-weight: ${V.TxWeight.GG};
`

export const FoodPrice = styled.h4`
  font-size: ${V.TxSize.G};
  line-height: ${V.lineHeight.G};
  font-weight: ${V.TxWeight.GG};
`

export const FoodText = styled.p`
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.M};
  margin-top: 8px;
  margin-bottom: 8px;
`

export const FoodButton = styled.button`
  background-color: ${V.Colors.Bege};
  color: ${V.Colors.Vermelho};
  padding: 4px;
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.G};
  width: 100%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${V.Colors.BegeHover};
  }
`
