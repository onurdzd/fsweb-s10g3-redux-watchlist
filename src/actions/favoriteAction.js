export const LISTEME_EKLE="LISTEME_EKLE";
export const FAVORI_CIKAR="FAVORI_CIKAR";


export const listemeEkle=(movie)=>{
    return ({type:LISTEME_EKLE,payload:movie})
}

export const favoriCikar=(id)=>{
    return ({type:FAVORI_CIKAR,payload:id})
}

