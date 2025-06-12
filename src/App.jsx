import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
