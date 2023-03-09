import { LISTEME_EKLE ,FAVORI_CIKAR} from "../actions/favoriteAction";
import { toast } from "react-toastify";
const notifyEkle = () => toast("Favori listesine eklendi!");
const notifySil = () => toast("Favori listesinden çıkartıldı!");

const initialState ={
    favorite:[]
}

export const favoriteReducer =(state=initialState,action)=>{
    switch(action.type){
        case LISTEME_EKLE :
            notifyEkle()
            if(state.favorite.includes(action.payload)===false){
                return {
                     ...state,
                    favorite:[...state.favorite,action.payload]};
            }else{
                return state;
            }
        case FAVORI_CIKAR :
            notifySil()
            return{
            ...state,
            favorite:state.favorite.filter(item=> item.id!== action.payload)
        }
    default:
        return state;
    }
}