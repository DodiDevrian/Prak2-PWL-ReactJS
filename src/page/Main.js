import React from "react"
import ReactDOM from "react-dom"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Beranda from "./Beranda"


const Main = () => {
    return (

        ReactDOM.render(
            <React.StrictMode>
                <Beranda/>
            </React.StrictMode>,
            document.getElementById("root")
        )
    )
}

export default Main