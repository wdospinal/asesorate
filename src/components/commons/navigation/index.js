import React from 'react';

const Navigation = () => 
  <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
  <div className="container-fluid d-flex flex-column p-0">
    <div className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
      <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
      <div className="sidebar-brand-text mx-3"><span>Aseorate</span></div>
    </div>
    <hr className="sidebar-divider my-0"></hr>
    <ul className="nav navbar-nav text-light" id="accordionSidebar">
      <li className="nav-item" role="presentation"><a className="nav-link active" href="index.html"><i className="fas fa-tachometer-alt"></i><span>Materias</span></a></li>
      <li className="nav-item" role="presentation"><a className="nav-link" href="login"><i className="fas fa-user"></i><span>Profile</span></a></li>
      <li className="nav-item" role="presentation"><a className="nav-link" href="calendario.html"><i className="fas fa-table"></i><span>Calendario</span></a></li>
      <li className="nav-item" role="presentation"><a className="nav-link" href="login.html"><i className="far fa-user-circle"></i><span>Logearse</span></a></li>
    </ul>
    <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
  </div>
  </nav>

export default Navigation;