import { useDispatch,useSelector } from "react-redux";
import { favoriCikar } from "../actions/favoriteAction";


export default function FavMovie() {
  const dispatch=useDispatch()
  const favMovies = useSelector((store)=> store.favoriteReducer.favorite);
  console.log(favMovies)
  return (
    <>
    {favMovies.length===0 ? <div className="text-center p-5 bg-neutral-600 text-fuchsia-50 mt-10">Favori film eklemediniz</div> : favMovies.map(fav=>(
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
