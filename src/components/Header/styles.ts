import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const HeaderBar = styled.header`
  background-color: ${V.Colors.BegeClaro};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 75%;
  display: none;

  div {
    display: flex;
    align-items: center;
    display: none;
  }

  a {
    color: ${V.Colors.Vermelho};
    font-weight: ${V.TxWeight.G};
    font-size: ${V.TxSize.M};
    line-height: ${V.lineHeight.M};
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  display: none;
`
export const LinkItem = styled.li`
  margin-right: 16px;
  display: none;
`
export const CarrinhoEstilo = styled.img`
  max-width: 20px;
  max-height: 20px;
  width: 100%;
  display: none;
`
export const LinkCarrinho = styled.a`
  display: flex;
  display: none;

  img {
    margin-left: 16px;
    display: none;
  }
`

export const LogoEstilo = styled.img`
  max-width: 35px;
  max-height: 35px;
  width: 100%;
  display: none;
`
export const HeaderBg = styled.div`
  padding: 40px 40px 80px;
  background-color: ${V.Colors.Bege};
  display: none;
`
