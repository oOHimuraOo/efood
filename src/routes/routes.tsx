import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import RestaurantPage from '../pages/Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante_1" element={<RestaurantPage />} />
    <Route path="/restaurante_2" element={<RestaurantPage />} />
    <Route path="/restaurante_3" element={<RestaurantPage />} />
    <Route path="/restaurante_4" element={<RestaurantPage />} />
  </Routes>
)

export default Rotas
