import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';

import { useSelector,useDispatch } from 'react-redux';
import { getApiConfiguration } from "./features/homeSlice";
import { RootState } from './store/store';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import Details from './pages/details/Details';
import PageNotFound from './pages/404/PageNotFound';
import Explore from './pages/explore/Explore';
import SearchResult from './pages/searchResult/SearchResult';


function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state: RootState) => state.home);


  useEffect(() => {
    apiTesting();
  },[]);
  
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
            .then((res) => {
              console.log(res);
              dispatch((getApiConfiguration(res)));
            })
  }

  return (
    <div className="App" style={{
      color: "white"
    }}>
      {url?.total_pages}
    </div>
  )
}

export default App
