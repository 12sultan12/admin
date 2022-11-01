import React from 'react';
import './style/style.scss';
import Home from "./components/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import List from "./components/list/List";
import Single from "./components/single/Single";
import New from "./components/new/New"

function App() {
    return (
        <div className="App">
<BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
        </Route>
        <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
        </Route>
    </Routes>
</BrowserRouter>
        </div>
    );
}

export default App;
