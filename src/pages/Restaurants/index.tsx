import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import FoodClass from '../../models/food'
import { useEffect } from 'react'

const mock = [
  new FoodClass(
    0,
    'https://via.placeholder.com/1600x1600',
    '10%',
    'novidade',
    'Prato teste 1',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, veniam dolorem! Quis maiores autem ea sit nam at ut tenetur in! Necessitatibus dolorum officia expedita repellat iusto vel sint eligendi.',
    '19.99',
    '2 a 3 pessoas'
  ),
  new FoodClass(
    1,
    'https://via.placeholder.com/1600x1600',
    '',
    'novidade',
    'Prato teste 2',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, veniam dolorem! Quis maiores autem ea sit nam at ut tenetur in! Necessitatibus dolorum officia expedita repellat iusto vel sint eligendi.',
    '19.99',
    '2 pessoas'
  ),
  new FoodClass(
    2,
    'https://via.placeholder.com/1600x1600',
    '',
    '',
    'Prato teste 3',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, veniam dolorem! Quis maiores autem ea sit nam at ut tenetur in! Necessitatibus dolorum officia expedita repellat iusto vel sint eligendi.',
    '19.99',
    '3 pessoas'
  ),
  new FoodClass(
    3,
    'https://via.placeholder.com/1600x1600',
    '10%',
    '',
    'Prato teste 4',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, veniam dolorem! Quis maiores autem ea sit nam at ut tenetur in! Necessitatibus dolorum officia expedita repellat iusto vel sint eligendi.',
    '19.99',
    ''
  ),
  new FoodClass(
    4,
    'https://via.placeholder.com/1600x1600',
    '',
    '',
    'Prato teste 4',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, veniam dolorem! Quis maiores autem ea sit nam at ut tenetur in! Necessitatibus dolorum officia expedita repellat iusto vel sint eligendi.',
    '19.99',
    '1 pessoa'
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
        imagemRestaurante="https://via.placeholder.com/1600x1600"
        logoRestaurante="https://via.placeholder.com/300x300"
        nomeRestaurante="Restaurante italiano teste 2"
      />
      <FoodList section={'Comidas'} foods={mock} />
      <FoodList section={'Bebidas'} foods={mock} />
    </>
  )
}

export default RestaurantPage
