import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
import MainMenu from "./screens/MainMenu.tsx";
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
