import './App.css'
import { Container, Divider, Header } from './App.styles'
import { StatementReport } from './pages/StatementReport'

function App() {
  return (
    <Container>
      <Header>Extrato</Header>
      <Divider />
      <StatementReport />
    </Container>
  )
}

export default App
