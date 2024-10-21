import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import FoodClass from '../../models/food'
import { useEffect } from 'react'
import imageTemp from '../../assets/Images/Restaurantes/01.png'
import imgFoodTemp from '../../assets/Images/Pratos/image 3.png'

const mock = [
  new FoodClass(
    0,
    imgFoodTemp,
    '',
    '',
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    '',
    ''
  ),
  new FoodClass(
    1,
    imgFoodTemp,
    '',
    '',
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    '',
    ''
  ),
  new FoodClass(
    2,
    imgFoodTemp,
    '',
    '',
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    '',
    ''
  ),
  new FoodClass(
    3,
    imgFoodTemp,
    '',
    '',
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    '',
    ''
  ),
  new FoodClass(
    4,
    imgFoodTemp,
    '',
    '',
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    '',
    ''
  ),
  new FoodClass(
    5,
    imgFoodTemp,
    '',
    '',
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    '',
    ''
  )
]

const RestaurantPage = () => {
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
      <Banner
        banner="restaurant"
        estiloRestaurante="italiano"
        imagemRestaurante={imageTemp}
        logoRestaurante=""
        nomeRestaurante="Restaurante italiano teste 2"
      />
      <FoodList section={''} foods={mock} />
    </>
  )
}

export default RestaurantPage
