import Banner from "../components/Banner";
import Header from "../components/Header";
import TopBar from "../components/TopBar";

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <TopBar />
      <Header />
      <Banner title={"This is my Home Page"} />
    </main>
  );
}

export default Home;
