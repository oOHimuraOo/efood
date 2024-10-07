import RestaurantClass from '../../models/restaurants'
import { Container } from '../../utils/Global_Styles'
import Restaurant from '../Restaurant'
import { List, RestaurantsContainer } from './styles'

type Props = {
  section: string
  restaurants: RestaurantClass[]
}

const RestaurantsList = ({ section, restaurants }: Props) => (
  <RestaurantsContainer id={section}>
    <Container>
      <h2>{section}</h2>
      <List>
        {restaurants.map((rest) => (
          <li key={rest.id}>
            <Restaurant
              image={rest.image}
              style={rest.style}
              news={rest.news}
              name={rest.name}
              score={rest.score}
              link={rest.link}
              linkTitle={rest.linkTitle}
              description={rest.description}
            />
          </li>
        ))}
      </List>
    </Container>
  </RestaurantsContainer>
)

export default RestaurantsList
