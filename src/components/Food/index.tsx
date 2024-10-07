import Tag from '../Tag'
import * as S from './styles'

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
  id,
  image,
  promocao,
  news,
  name,
  description,
  price,
  size
}: Props) => (
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
    <S.FoodButton type="button">Adicionar ao carrinho</S.FoodButton>
  </S.FoodCardContainer>
)
