import { movies } from "../movies";
import { SIRADAKI_FILM,BASA_DON,ONCEKI_FILM } from "../actions/movieAction";


const initialState ={
    movies:[...movies],
    sira:0
}

export const movieReducer =(state=initialState,action)=>{
    switch(action.type){
        case SIRADAKI_FILM:
            return{
                ...state,
                sira:state.sira+1
            }
        case BASA_DON:
            return(
            initialState
            )
        case ONCEKI_FILM:
            if(state.sira!==0){
            return{
            ...state,
            sira:state.sira-1
            }}else{ return state}
    default:
        return state;
    }
}