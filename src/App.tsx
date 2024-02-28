import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getApiConfiguration } from "./features/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAPiConfig();
  }, []);

  const fetchAPiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
    };

      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
