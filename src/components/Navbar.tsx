import  {NavLink, Link }  from "react-router-dom"


export const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary">
  <div className="container-fluid">
     <Link className="navbar-brand" to="/">
   <img src="/src/assets/logo.png" alt="" width="50" height="50" />
    {/* <i className="fa-brands fa-linkedin"></i> Tool */}
    </Link>
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" >
         <NavLink 
         data-toggle="collapse" data-target=".navbar-collapse"
         className="nav-link" to="/"><i className="fa-solid fa-house-chimney"></i> Home</NavLink>
       </li>

         <li className="nav-item" >
         <NavLink 
         data-toggle="collapse" data-target=".navbar-collapse"
         className="nav-link" to="/tarifs"><i className="fa-solid fa-dollar"></i> Tarifs</NavLink>
       </li>
        
      
        
      </ul>

    
    </div>
  </div>
</nav>
    )
}