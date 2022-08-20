import Banner from "../components/Banner";
import Header from "../components/Header";
import TopBar from "../components/TopBar";

import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link to={"/about"}>Visit About</Link>
      <TopBar />
      <Header />
      <Banner title={"This is my Home Page"} />
    </main>
  );
}

export default Home;
