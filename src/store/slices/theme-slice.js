import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name:"theme",   // actionlari olusturmak icin kullanilir
    initialState:{    // icinde neler tutatcaksin bolumu
darkMode:false
    },
    reducers:{
       
setDarkMode:(state,action)=>{        // reducer kendisi bir obje zaten 
    state.darkMode = action.payload   // darkMode u disardan bir parametre alarak degistirecez
}
    }   // state icine set dark modu attik ve action.payload ile tasiyiciya verdik
});

export const {setDarkMode} =themeSlice.actions   // themeSlice.actions u satDarkModa attik 
export default themeSlice.reducer;