import React from 'react'
import { Provider, useSelector } from 'react-redux'
import DarkModeSwitcher from './components/dark-mode.js/dark-mode-switcher'
import store from "./store"
import "bootstrap/dist/css/bootstrap.min.css";
import LangSwitcher from './components/lang-switcher/lang-switcher';

const App = () => {


 
const darkMode = useSelector(state=>state.theme.darkMode);
return (
    <div className={darkMode ? "dark" : ""}>
      <DarkModeSwitcher/>
      <LangSwitcher/>
    </div>
)
}

export default App