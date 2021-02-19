import { Container } from "react-bootstrap";
import Tracks from "../../components/Tracks";

const Home = () => (
  <main className="main-section">
    <br />
    <br />
    <br />
    <Container>
      <Tracks artistName={"Michael Jackson"} />
      <Tracks artistName={"50cent"} />
    </Container>
  </main>
);

export default Home;
