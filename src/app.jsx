import ReactDOM from "react-dom/client";
import "./style.css"

import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route 
} 
from "react-router-dom";

// Components
import Header from "./components/Header"
import Content from "./components/Content"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<Content />} />
    </Route>
  )
);

function App(){
    return (
      <RouterProvider router={router} />
    );
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)