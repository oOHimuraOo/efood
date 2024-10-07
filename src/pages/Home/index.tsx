import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import RestaurantsList from '../../components/RestaurantsList/Index'
import RestaurantClass from '../../models/restaurants'
import { useEffect } from 'react'

const mock: RestaurantClass[] = [
  new RestaurantClass(
    0,
    'https://via.placeholder.com/600x600',
    'Restaurante Chines Teste 1',
    'oferstas da semana',
    'chinesa',
    '4.8',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis, accusantium nemo repellat nihil sint nesciunt quo cum incidunt expedita. Error obcaecati voluptatem accusantium necessitatibus veniam! Neque optio iusto dolorum!',
    'saiba mais',
    '/restaurante_1#Comidas',
    []
  ),
  new RestaurantClass(
    1,
    'https://via.placeholder.com/600x600',
    'Restaurante Japones Teste 2',
    '',
    'Japonesa',
    '4.3',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis, accusantium nemo repellat nihil sint nesciunt quo cum incidunt expedita. Error obcaecati voluptatem accusantium necessitatibus veniam! Neque optio iusto dolorum!',
    'saiba mais',
    '/restaurante_2#Comidas',
    []
  ),
  new RestaurantClass(
    2,
    'https://via.placeholder.com/600x600',
    'Retaurante Italiano teste 3',
    'Mais Escolhido',
    'Italiana',
    '4.9',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis, accusantium nemo repellat nihil sint nesciunt quo cum incidunt expedita. Error obcaecati voluptatem accusantium necessitatibus veniam! Neque optio iusto dolorum!',
    'saiba mais',
    '/restaurante_3#Comidas',
    []
  ),
  new RestaurantClass(
    3,
    'https://via.placeholder.com/600x600',
    'Restaurante Meditarraneo teste 4',
    '',
    'Mediterranea',
    '3.2',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis, accusantium nemo repellat nihil sint nesciunt quo cum incidunt expedita. Error obcaecati voluptatem accusantium necessitatibus veniam! Neque optio iusto dolorum!',
    'saiba mais',
    '/restaurante_4#Comidas',
    []
  )
]

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <>
      <Banner banner="home" />
      <RestaurantsList section="Restaurantes" restaurants={mock} />
    </>
  )
}

export default Home
