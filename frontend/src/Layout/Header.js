import { NavLink,Link } from "react-router-dom";
import { useAuth } from "../context/auth.js";
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import '../styles/Header.css';
const Header = () => {

  const {auth,setAuth} = useAuth()
  // eslint-disable-next-line
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate()
  const handleLogout = () =>{
    setAuth({
      ...auth,user:null,token:''
    })
    setBlogPosts([]);

    localStorage.removeItem('auth');
    setTimeout(()=>{ toast.success('Logout Successful')},100)
    setTimeout(()=>{navigate('/login')},2000)
   
  };
    return ( 
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
               BLOGS
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  HOME
                </NavLink>
              </li>
              {!auth?.user ?(
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      REGISTER
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      LOGIN
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={'/write'}
                          className="dropdown-item"
                        >
                          WRITE
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/"
                          className="dropdown-item"
                        >
                          LOGOUT
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>

     );
}
 
export default Header;