import { useState } from "react";
import ContentWrapper from "../contentWrapper/contentWrapper";
import SwitchTabs from "../switchTabs/SwitchTabs";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import Carousel from "../carousel/Carousel";


const TopRated = () => {

  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading} = useFetch(`/${endPoint}/top_rated`);

  const tabs = [{ id: 1, title: "Movies" }, { id: 2, title: "TV Shows" }];

  const onTabChange = (tab: Object) => {
    setEndPoint(tab.title === "Movies" ? "movie" : "tv");
  };
    
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={tabs} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
      {/* <Carousel data={(data as unknown as { results: any[] })?.results} loading={loading} /> */}
    </div>
  );
};

export default TopRated;
