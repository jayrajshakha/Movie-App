import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "./utils/api";
import { useDispatch } from "react-redux";
import { getApiConfig, getGenres } from "./store/HomeSlice";

// component and pages are imported here
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./pages/404Page/PageNotFound";
import Detail from "./pages/detailsPage/Detail";
import Explore from "./pages/expolerPage/Explore";
import HomePage from "./pages/home/HomePage";
import SerchResult from "./pages/searchResultsPage/SerchResult";

const App = () => {
  const dispatch = useDispatch();

  const a = () => {
    fetchData("/configuration").then((res) => {
      // console.log(res)

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfig(url));
    });
  };

  useEffect(() => {
    a();
    genresCall();
  }, []);

  const genresCall = async () => {
    let promises = [];
    let endpoints = ["tv", "movie"];
    let allGenres = {};

    endpoints.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:mediaType/:id" element={<Detail />} />
        <Route path="/search/:query" element={<SerchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
