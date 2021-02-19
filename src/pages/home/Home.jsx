import Tracks from "../../components/Tracks";

const Home = () => {
  const params = new URLSearchParams(window.location);
  console.log("params", params.get("ko"));
  return (
    <main className="main-section">
      <br />
      <br />
      <br />
      <Tracks artistName="Michael Jackson" />
      <Tracks artistName="50cent" />
    </main>
  );
};

export default Home;
