import RestaurantClass from '../../utils/models/restaurants'
import { Container } from '../../utils/Global_Styles'
import Restaurant from '../Restaurant'
import { List, RestaurantsContainer } from './styles'
import { useEffect, useState } from 'react'
import converterValores from '../../utils/Converter'

type Props = {
  section: string
}

const RestaurantsList = ({ section }: Props) => {
  const [restaurants, setRestaurants] = useState<RestaurantClass[]>([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await converterValores()
      setRestaurants(data)
    }
    fetchRestaurants()
  }, [])

  if (restaurants.length === 0) {
    return <h3 id="Restuarantes">Carregando...</h3>
  }

  return (
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
}
export default RestaurantsList
