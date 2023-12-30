import "./style/Normalization.css"
import "./style/App.css"
import Example from "./examplepic.jpg"

const app = document.querySelector("#app")
const img = document.createElement("img")
img.src = Example

app.textContent = "asd"
app.appendChild(img)