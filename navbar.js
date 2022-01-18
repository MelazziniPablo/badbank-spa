function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home/" data-toggle="tooltip" data-placement="bottom" title="Home Page!">BadBank</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link" to="/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Create a new account!">Create Account</Link>                  
            <Link className="nav-link" to="/deposit/" data-toggle="tooltip" data-placement="bottom" title="Make a new deposit!">Deposit</Link>         
            <Link className="nav-link" to="/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Withdraw from your account!">Withdraw</Link>
            <Link className="nav-link" to="/alldata/" data-toggle="tooltip" data-placement="bottom" title="These are all the users and user submissions!">All Data</Link>           
      </div>
    </div>
  </div>
</nav>
    </>
  );
}