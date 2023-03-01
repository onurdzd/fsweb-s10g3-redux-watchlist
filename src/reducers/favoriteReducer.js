import { LISTEME_EKLE ,FAVORI_CIKAR} from "../actions/favoriteAction";

const initialState ={
    favorite:[]
}

export const favoriteReducer =(state=initialState,action)=>{
    switch(action.type){
        case LISTEME_EKLE :
            console.log(state.favorite.length===0, state.favorite.includes(action.payload))
            if(state.favorite.includes(action.payload)===false){
                return {
                     ...state,
                    favorite:[...state.favorite,action.payload]};
            }else{
                return state;
            }
        case FAVORI_CIKAR :
            return{
            ...state,
            favorite:state.favorite.filter(item=> item.id!== action.payload)
        }
    default:
        return state;
    }
}