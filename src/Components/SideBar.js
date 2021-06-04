import {useEffect} from 'react'
import {BrowserRouter as Router,Link } from "react-router-dom";
import "./style.css"
function SideBar() {

    let pathname = window.location.pathname;
    // console.log("pathname==>",pathname)
    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);

    return (
        <div>
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                    {/*
                    Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

                    Tip 2: you can also add an image using data-image tag
                    */}
                    <div className="logo simple-text logo-normal"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
                        AfaqueSoft
                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li  className={`${pathname.match('/dashboard') ? 'nav-item active' : 'nav-item'}`}>
                                <Link className="nav-link" to="/dashboard">
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className={`${pathname.match('/accounts') ? 'nav-item active' : 'nav-item'}`} >
                                <Link className="nav-link" to="/accounts">
                                    <i className="material-icons">person</i>
                                    <p>Accounts</p>
                                </Link>
                            </li>
                            <li className={`${pathname.match('/orders') ? 'nav-item active' : 'nav-item'}`}>
                                <Link className="nav-link" to="/orders">
                                    <i className="material-icons">bubble_chart</i>
                                    <p>Orders</p>
                                </Link>
                            </li>
                            <li className={`${pathname.match('/bills') ? 'nav-item active' : 'nav-item'}`}>
                                <Link className="nav-link" to="/bills">
                                    <i className="material-icons">content_paste</i>
                                    <p>Bills</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default SideBar;