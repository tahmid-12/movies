import HeroBanner from "../../components/heroBanner/HeroBanner";
import Popular from "../../components/popular/Popular";
import TopRated from "../../components/topRated/TopRated";
import Trending from "../../components/trending/Trending";
import "./style.scss";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
