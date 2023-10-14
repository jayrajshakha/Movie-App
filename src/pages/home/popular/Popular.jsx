import { useState, useEffect } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContetntWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import { fetchData } from "../../../utils/api";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const [dt, setDt] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchTime = () => {
    fetchData(`/discover/${endpoint}`).then((res) =>( setDt(res), setLoading(false)));
  };

  // console.log(loading, endpoint, dt?.results[0].title);

  useEffect(() => {
    return fetchTime();
  }, [endpoint]);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv" );
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle"> What's Popular</span>
        <SwitchTab onTabChange={onTabChange} data={["Movies", "TV shows"]} />
      </ContentWrapper>
      <Carousel data ={dt?.results} endpoint={endpoint} loading ={loading} />
    </div>
  );
};

export default Popular;
