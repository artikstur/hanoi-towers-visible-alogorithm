import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
// @ts-ignore
import MainMenu from "./screens/MainMenu.tsx";
// @ts-ignore
import AlgorithmScreen from "./screens/AlgorithmScreen.tsx";


function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} Component={MainMenu}/>
                <Route path={'/algorithm'} Component={AlgorithmScreen}/>
            </Routes>
        </HashRouter>
    );
}


export default App
