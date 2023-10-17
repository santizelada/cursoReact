// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CartWidget from './CartWidget';
// import '../cartWidget.css'
// import { Link } from 'react-router-dom';

// function Navbar() {
//     return(
// <nav className="navbar navbar-expand-lg bg-body-tertiary navElement">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">SVZ - Wayne Enterprises</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" to="#">Home</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/">Blue</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="#">Grey</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="#">Black</Link>
//         </li>




//         <li class="nav-item dropdown">
//           <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </Link>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" to="#">Action</a></li>
//             <li><a class="dropdown-item" to="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" to="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>

//       <CartWidget/>

// </nav>
//     )
// }

// export default Navbar;




import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navElement">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          SVZ - Wayne Enterprises
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/blue" className="nav-link" >
                Blue
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/grey" className="nav-link" >
                Grey
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/black" className="nav-link" >
                Black
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;