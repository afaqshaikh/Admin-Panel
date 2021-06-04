

function Navbar(props) {
    // console.log("Props NavBar==> ",props)
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <h3 className="navbar-brand" style={{fontWeight:"bold"}} >{props.name}</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon icon-bar" />
                        <span className="navbar-toggler-icon icon-bar" />
                        <span className="navbar-toggler-icon icon-bar" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <form className="navbar-form">
                            <div className="input-group no-border">
                                <input type="text" defaultValue className="form-control" placeholder="Search..." />
                                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                    <i className="material-icons">search</i>
                                    <div className="ripple-container" />
                                </button>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <button className="nav-link">
                                    <i className="material-icons">dashboard</i>
                                    <p className="d-lg-none d-md-block">
                                        Stats
                        </p>
                                </button>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                    <i className="material-icons">notifications</i>
                                    <span className="notification">5</span>
                                    <p className="d-lg-none d-md-block">
                                        Some Actions
                        </p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <p className="dropdown-item" >Mike John responded to your email</p>
                                <p className="dropdown-item" >Mike John responded to your email</p>
                                <p className="dropdown-item" >Mike John responded to your email</p>
                                    <p className="dropdown-item" >Mike John responded to your email</p>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">person</i>
                                    <p className="d-lg-none d-md-block">
                                        Account
                        </p>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                                    <p className="dropdown-item">Profile</p>
                                    <p className="dropdown-item" >Settings</p>
                                    <div className="dropdown-divider" />
                                    <p className="dropdown-item">Log out</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar */}
        </div>

    )
}

export default Navbar