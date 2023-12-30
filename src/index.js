import "./style/Normalization.css"
import "./style/App.css"

import React from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

import Example from "./examplepic.jpg"

const root = createRoot(document.querySelector("#root"))
root.render(<App></App>)