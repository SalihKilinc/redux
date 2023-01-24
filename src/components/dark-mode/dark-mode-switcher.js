import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../store/slices/theme-slice'

const DarkModeSwitcher = () => {     // merkezi datadan veri cekmek icin useSelector kullanilir degistirmek icin useDispatch
const darkMode = useSelector((state)=> state.theme.darkMode)  // merkezi sate de olan bir datayi aldik yani darkMode u  consoldan theme olarak aldik

const dispatch =useDispatch();  // state alarak index jsi elde ettik

  return (
    <div>
        <Form.Check 
        type="switch"
        id="dmSwitch"
        label={darkMode ? "Light Mode" : "Dark Mode"}
        checked={darkMode}  /*themeSlicede yaptigimiz darkMode false idi buraya false geldi ilk deger */
        onChange={ ()=>  dispatch(setDarkMode(!darkMode))}  /* disPatch her zaman bir action bekler  yani darkMOde aldik cunku actionu darkMode atadik
         */
      />
    </div>
  )
}

export default DarkModeSwitcher