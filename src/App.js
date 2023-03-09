import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector,useDispatch } from "react-redux";
import {basaDon, oncekiFilm, siradakiFilm } from "./actions/movieAction";
import { listemeEkle } from "./actions/favoriteAction";
import { movies } from "./movies";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch=useDispatch()
  let sira=useSelector((store)=> store.movieReducer.sira)
  const movie = useSelector(store=> store.movieReducer.movies)[sira]
  
  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem 
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />
          <div className="flex gap-3 justify-end py-3">
            {sira!==0 &&
            <button className="select-none px-4 py-2 border bg-green-500 border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500" onClick={()=>dispatch(oncekiFilm())}>
              Önceki
            </button>}
            {sira<movies.length-1 && <button
              onClick={()=>dispatch(siradakiFilm())}
              className="select-none px-4 py-2 border border-blue-700 text-white hover:bg-orange-400  bg-orange-500"
            >
              Sıradaki
            </button>}
            <button className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white" onClick={()=>dispatch(listemeEkle(movie))}>
              Listeme ekle
            </button>
            <button className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white" onClick={()=>dispatch(basaDon())}>
              Basa Don
            </button>
          </div>
        </Route>
        <Route path="/listem">
              <FavMovie/>
        </Route>
      </Switch>
      <ToastContainer position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
    </div>
  );
}

export default App;
