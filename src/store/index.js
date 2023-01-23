import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./slices/locale-slice";
import themeSlice from "./slices/theme-slice";


export default configureStore({
    reducer:{
        theme:themeSlice,
        locale: localeSlice
    }
})

// uygulamayi sarmallamak icin yaptik 
// thenme sliceyi aldik ilk
// locale kismini aldik sonra
// buradaki verileri store olarek app js e gonderebiliriz 