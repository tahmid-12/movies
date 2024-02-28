import { useState,KeyboardEvent,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ContentWrapper from "../contentWrapper/contentWrapper";
import Img from "../lazyLoadImage/Img";
import "./style.scss";

import useFetch from "../../hooks/useFetch";

const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  console.log("URL in Banner", url);

  const { data, loading } = useFetch("/movie/popular");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    console.log("BG ",bg)
    setBackground(bg);
  },[data]);

  const searchQueryHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`);
    }
  }


  return (
    <div className="heroBanner">

      <div className="backdrop-img">
        {
          !loading && <div className="backdrop-img">
            <Img src={background}/>
          </div>
        }
      </div>

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="searchInput">
            <input
                  type="text"
                  placeholder="Search for a Movie or Series..." 
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
