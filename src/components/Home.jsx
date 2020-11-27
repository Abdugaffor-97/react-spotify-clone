import { Container } from 'react-bootstrap'
import Tracks from './Tracks'

const Home = () => (
  <main className='mainGrid' style={{ paddingLeft: '237px', paddingBottom: '86px', color: 'white' }}>
    <br />
    <br />
    <br />
    <Container>
      <Tracks artistName={"Eminem"} />
    </Container>
  </main>
)


export default Home