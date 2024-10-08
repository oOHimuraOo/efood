import { useLocation, useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import FoodClass from '../../utils/models/food'
import { useEffect, useState } from 'react'
import converterValores from '../../utils/Converter'
import RestaurantClass from '../../utils/models/restaurants'
import { mock } from '../../utils/Mock'

const RestaurantPage = () => {
  const location = useLocation()
  const { restId } = useParams()
  const [restaurants, setRestaurants] = useState<RestaurantClass[]>([])
  const [nome, setNome] = useState<string>('')
  const [foodArray, setFoodArray] = useState<FoodClass[]>([])
  const [bebidaArray, setBebidaArray] = useState<FoodClass[]>([])
  const [estilo, setEstilo] = useState<string>('')
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await converterValores()
      setRestaurants(data)

      if (restId) {
        const index = parseInt(restId)
        const restaurant = restaurants[index]
        if (restaurant) {
          setNome(restaurant.name)
          setFoodArray(restaurant.food)
          setEstilo(restaurant.style)
          setImage(restaurant.image)
          setBebidaArray(mock[index].food)
        }
      }
    }
    fetchRestaurants()
  }, [restId, restaurants])

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  if (foodArray.length === 0 || bebidaArray.length === 0) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner
        banner="restaurant"
        estiloRestaurante={estilo}
        imagemRestaurante={image}
        logoRestaurante=""
        nomeRestaurante={nome}
      />
      <FoodList section={'Comidas'} foods={foodArray} />
      <FoodList section={'Bebidas'} foods={bebidaArray} />
    </>
  )
}

export default RestaurantPage
