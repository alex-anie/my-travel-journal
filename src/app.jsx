// import React from "react";
import ReactDOM from "react-dom/client";
import style from "./style.css"

// Components
import Header from "./components/Header"
import Content from "./components/Content"



function App(){
    return(
        <div>
            <Header />
            <Content />
        </div>
    )
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)