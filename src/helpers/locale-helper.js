
import store from "../store"

export const langs =[
    {title: "English",code : "en", country :"gb" },
    {title: "Türkce",code : "tr", country :"tr" },
    {title: "Français",code : "fr", country :"fr" },
]
   
 export const getCurrentLang =()=>{
    return store.getState().locale.lang;

}

export const setCurrentLang =(lang)=>{
    
}

export const $t =(key)=>{
    
}

// uygulamada kullanilacak dil ve bayraklari aldik  --- bunlari kodladik kisa kisa  en fr tr olarak 
// lang switcher de map ile dondurecegiz