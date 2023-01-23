import { createSlice } from "@reduxjs/toolkit";



export const localeSlice = createSlice({  // createSlice reduxx elemani
    name: "locale",
    initialState :{  // bos degerleri siraladik istersek buraya farkli degerlerde yazabiliriz farkli projeler icin
        lang : "en",
        currency:"usd"
    },
    reducers :{
        setLang : (state,action)=>{   // yine ayni yontem state ve action
            state.lang=action.payload;
        }
    }
})
export const { setLang } = localeSlice.actions;  // setLangi icine attik
export default localeSlice.reducer;