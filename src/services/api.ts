import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import RestaurantClass from '../utils/models/restaurants'

type comidaApi = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

type restauratesApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: comidaApi[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<restauratesApi[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetRestaurantsQuery } = api
export default api
