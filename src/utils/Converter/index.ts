import FoodClass from '../models/food'
import RestaurantClass from '../models/restaurants'

type comidaApi = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

async function converterValores(): Promise<RestaurantClass[]> {
  const url = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

  try {
    const response = await fetch(url)
    const data = await response.json()

    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty('erro')) {
      console.error('Erro na API', data.erro)
      return []
    }
    const novoArray: RestaurantClass[] = []

    for (let x = 0; x < data.length; x++) {
      const id = data[x].id - 1
      const nome = `${data[x].titulo}`
      const estilo = `${data[x].tipo}`
      const news = data[x].destacado ? gerarNews() : ''
      const descricao = `${data[x].descricao}`
      const image = `${data[x].capa}`
      const score = `${data[x].avaliacao}`
      const food: FoodClass[] = []
      const link = `/${id}`
      data[x].cardapio.forEach((comida: comidaApi) => {
        food.push(converterComida(comida, link))
      })

      novoArray.push(
        new RestaurantClass(
          id,
          image,
          nome,
          news,
          estilo,
          score,
          descricao,
          'Saiba mais',
          link,
          food
        )
      )
    }
    console.log(novoArray)

    return novoArray
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return []
  }
}

export default converterValores

function gerarNews(): string {
  return 'Novidade'
}

function converterComida(comida: comidaApi, link: string): FoodClass {
  const id = comida.id - 1
  const image = comida.foto
  const news = ''
  const promocao = ''
  const name = comida.nome
  const descricao = comida.descricao
  const preco = `${comida.preco}`
  const size = comida.porcao
  const linkcomida = `${link}/${id}`

  const novaComida = new FoodClass(
    id,
    image,
    promocao,
    news,
    name,
    descricao,
    preco,
    size,
    linkcomida
  )
  return novaComida
}
