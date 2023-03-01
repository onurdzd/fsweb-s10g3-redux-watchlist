import { useDispatch,useSelector } from "react-redux";
import { favoriCikar } from "../actions/favoriteAction";


export default function FavMovie() {
  const dispatch=useDispatch()
  let sira=useSelector((store)=> store.movieReducer.sira)
  const movie = useSelector(store=> store.movieReducer.movies)[sira]
  const favMovies = useSelector((store)=> store.favoriteReducer.favorite);
 
  return (
    <>
    {favMovies.map(fav=>(
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{fav.title}</div>
      <button className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100" onClick={()=>dispatch(favoriCikar(fav.id))}>
        Çıkar
      </button>
    </div>
    ))}
    </>
  );
}
