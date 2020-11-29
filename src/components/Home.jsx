import { Container } from 'react-bootstrap'
import Tracks from './Tracks'

const Home = () => (
  <main className='main-section'>
    <br />
    <br />
    <br />
    <Container>
      <Tracks artistName={"Eminem"} />
    </Container>
  </main>
)


export default Home