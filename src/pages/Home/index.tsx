import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import RestaurantsList from '../../components/RestaurantsList/Index'
import RestaurantClass from '../../models/restaurants'
import { useEffect } from 'react'
import imgTemp1 from '../../assets/Images/Restaurantes/01.png'
import imgTemp2 from '../../assets/Images/Restaurantes/2.png'

const mock: RestaurantClass[] = [
  new RestaurantClass(
    0,
    imgTemp1,
    'Hioki Sushi',
    'Destaque da semana',
    'japonesa',
    '4.9',
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    'saiba mais',
    '/restaurante_1#Comidas',
    []
  ),
  new RestaurantClass(
    1,
    imgTemp2,
    'La Dolce Vita Trattoria',
    '',
    'Italiana',
    '4.6',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'saiba mais',
    '/restaurante_2#Comidas',
    []
  ),
  new RestaurantClass(
    2,
    imgTemp2,
    'La Dolce Vita Trattoria',
    '',
    'Italiana',
    '4.6',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'saiba mais',
    '/restaurante_2#Comidas',
    []
  ),
  new RestaurantClass(
    3,
    imgTemp2,
    'La Dolce Vita Trattoria',
    '',
    'Italiana',
    '4.6',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'saiba mais',
    '/restaurante_2#Comidas',
    []
  ),
  new RestaurantClass(
    4,
    imgTemp2,
    'La Dolce Vita Trattoria',
    '',
    'Italiana',
    '4.6',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'saiba mais',
    '/restaurante_2#Comidas',
    []
  ),
  new RestaurantClass(
    5,
    imgTemp2,
    'La Dolce Vita Trattoria',
    '',
    'Italiana',
    '4.6',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'saiba mais',
    '/restaurante_2#Comidas',
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
