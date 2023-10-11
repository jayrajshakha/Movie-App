import { useState, useEffect } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContetntWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import { fetchData } from "../../../utils/api";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const [dt, setDt] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchTime = () => {
    fetchData(`/trending/movie/${endpoint}`).then((res) =>( setDt(res), setLoading(false)));
  };

  console.log(loading, endpoint, dt?.results[0].title);

  useEffect(() => {
    return fetchTime();
  }, [endpoint]);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab onTabChange={onTabChange} data={["Day", "Week"]} />
      </ContentWrapper>
      <Carousel data ={dt?.results} loading ={loading} />
    </div>
  );
};

export default Trending;
