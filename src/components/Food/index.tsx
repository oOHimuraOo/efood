import { useState } from 'react'
import Tag from '../Tag'
import * as S from './styles'
import close from '../../assets/Images/Icons/close 1.png'

type Props = {
  id: number
  image: string
  promocao: string
  news: string
  name: string
  description: string
  price: string
  size: string
}

export const Food = ({
  image,
  promocao,
  news,
  name,
  description,
  price,
  size
}: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const closeModal = () => setModalAberto(false)

  return (
    <>
      <S.FoodCardContainer>
        <S.FoodImageContainer>
          <S.FoodImage src={image} alt="" />
          <S.Positioner>
            {news !== '' && <Tag>{news}</Tag>}
            {promocao !== '' && <Tag>{promocao}</Tag>}
          </S.Positioner>
        </S.FoodImageContainer>
        <S.FoodTitleContainer>
          <S.FoodTitle>{name}</S.FoodTitle>
          <S.FoodPrice>{price}</S.FoodPrice>
        </S.FoodTitleContainer>
        <S.FoodText>{description}</S.FoodText>
        <S.FoodButton type="button" onClick={() => setModalAberto(true)}>
          Adicionar ao carrinho
        </S.FoodButton>
      </S.FoodCardContainer>
      <S.ModalContainer className={modalAberto ? 'visivel' : ''}>
        <S.ModalBackground>
          <S.ModalImage src={image} alt={name} />
          <S.ModaltDescriptionContainer>
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
              <h4>
                <b>Serve: </b>
                {size}
              </h4>
            </div>
            <S.ModalBotao>adicionar ao carrinho - R$ {price}</S.ModalBotao>
          </S.ModaltDescriptionContainer>
          <S.Modallink onClick={closeModal}>
            <img src={close} alt="Fechar" />
          </S.Modallink>
        </S.ModalBackground>
        <S.Overlay onClick={closeModal}></S.Overlay>
      </S.ModalContainer>
    </>
  )
}
