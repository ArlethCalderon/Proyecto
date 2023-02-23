import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import NavBar from "./pages/NavBar";
import UserPage from "./pages/UserPage";
import DashBoard from "./pages/DashBoard";
/**import Comentario from "./componentes/Comenrtario";
import Imagenes from "./componentes/Imagenes";
import Tarjeta from "./componentes/Tarjeta";*/

const App = () => {
  return(
    <div>
    <BrowserRouter>
    <NavBar/>
    <DashBoard/>
    <Routes>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/user" element={<User/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/users/10" element={<UserPage/>}/>
      <Route path="/users" element= {<User/>}></Route>
      <Route path="/usuarios" element ={<Navigate replace to ='/users'/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>

  )
}
export default App;

/**  <div className="container">
    <Comentario nombre = 'Arleth'/>
    <Imagenes/>
    <Tarjeta/>

   </div> */