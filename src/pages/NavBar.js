import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          <NavLink to='/' className={({isActive})=>isActive?'active':''}>Home</NavLink> 
        </li>
        <li class="nav-item">
          <NavLink to = "/about" className={({isActive})=> isActive? 'active':""}>About me</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to ="/users" className={({isActive}) => isActive? 'active':""}>Users</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>

    )
}
export default NavBar