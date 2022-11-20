import React from "react";


function Header(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Start Bootsrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">All Products</a>
            <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Popular Items</a>
          <a className="dropdown-item" href="#">New Arrivals</a>
          
          
        </div>
      </li>

    </ul>
    <form className="form-inline my-2 my-lg-0">
   
      <button className="btn btn-outline-dark my-2 my-sm-0"> Cart  <span className="btn btn-dark">{props.cartcount}</span></button>
    </form>
  </div>
</nav>
    )
}

export default Header;