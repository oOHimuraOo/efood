import FoodClass from '../../models/food'
import { Container } from '../../utils/Global_Styles'
import { Food } from '../Food'
import * as S from './styles'

type Props = {
  section: string
  foods: FoodClass[]
}

const FoodList = ({ section, foods }: Props) => (
  <S.FoodsContainer id={section}>
    <Container>
      <h2>{section}</h2>
      <S.FoodList>
        {foods.map((food) => (
          <li key={food.id}>
            <Food
              image={food.image}
              promocao={food.promocao}
              news={food.news}
              name={food.name}
              price={food.price}
              size={food.size}
              description={food.description}
              id={food.id}
            />
          </li>
        ))}
      </S.FoodList>
    </Container>
  </S.FoodsContainer>
)

export default FoodList
