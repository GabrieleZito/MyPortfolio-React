/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { useTranslation } from "react-i18next";
import "./i18n.js";
import { Analytics } from "@vercel/analytics/react";

function App() {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage("en");
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Analytics />
        </>
    );
}

export default App;
