import BarraLateral from './containers/BarraLateral/BarraLateral'
import ListaDeTarefas from './containers/BarraLateral/BarraLateral/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
