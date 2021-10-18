import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import NaviBar from "./components/navibar/Navibar";
import {Context} from "./utils/context";
import {useState} from "react";

import ApiService from "./service/ApiService";
export const apiService = new ApiService();


function App() {
    const story = JSON.parse(localStorage.getItem("auth"));
    const [context, setContext] = useState(story);
    return (
        <Context.Provider value={[context, setContext]}>
            <BrowserRouter>
                <NaviBar/>
                <AppRouter/>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
