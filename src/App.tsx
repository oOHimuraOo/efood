import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyle, { Container } from './utils/Global_Styles'
import Footer from './components/Footer'
import Rotas from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
