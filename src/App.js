import React from 'react'
import { Provider, useSelector } from 'react-redux'
import DarkModeSwitcher from './components/dark-mode/dark-mode-switcher'
import store from "./store"
import "bootstrap/dist/css/bootstrap.min.css";
import LangSwitcher from './components/lang-switcher/lang-switcher';
import "./App.css"
import { $t } from './helpers/locale-helper';
const App = () => {


 
const darkMode = useSelector(state=>state.theme.darkMode); // dark modu harekete gecirdik asgida ternary yaptik 
return (
    <div className={darkMode  ? "dark" : ""}>  
      <DarkModeSwitcher/>
      <LangSwitcher/>
      <h1> {$t("Hello World")}</h1>
    </div>
)
}

export default App

//provider react reduxtan gelir ve yapiyi sarmallamamizi saglar
// store sayfasi index js icindeki verileri buray tasir
// app css e dark mode yaptik burdan cagirdik 
// merkezi datadan cekmek icin useSeletor kullandik yine