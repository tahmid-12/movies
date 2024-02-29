import HeroBanner from "../../components/heroBanner/HeroBanner";
import Trending from "../../components/trending/Trending";
import "./style.scss";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  )
}

export default Home
