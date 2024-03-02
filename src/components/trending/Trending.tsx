import { useState } from "react";
import ContentWrapper from "../contentWrapper/contentWrapper";
import SwitchTabs from "../switchTabs/SwitchTabs";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import Carousel from "../carousel/Carousel";


const Trending = () => {

  const [endPoint, setEndPoint] = useState("day");

  const { data, loading} = useFetch(`/trending//movie/${endPoint}`);

  const tabs = [{ id: 1, title: "Day" }, { id: 2, title: "Week" }];

  const onTabChange = (tab: string) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
    
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle"> Trending</span>
        <SwitchTabs data={tabs} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
