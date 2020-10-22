import React from 'react'
import Style from './NavBar.module.scss'
import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <nav className={Style.navBar}>
            <h1 className={Style.navBarTitle}>Beans Love Beers</h1>
            <ul className={Style.navBarList}>
                <NavLink to="/" exact style={{ textDecoration: "none", color: "#fff" }} activeClassName={Style.activeLink}> <li>Home</li></NavLink>
                <NavLink to="/myFavourates" exact style={{ textDecoration: "none", color: "#fff" }} activeClassName={Style.activeLink}><li>Favourite</li></NavLink>
            </ul>
        </nav>
    )
}

export default NavBar
