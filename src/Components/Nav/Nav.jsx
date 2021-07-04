import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../Context'
export const Nav = () => {
    const { setRoute } = useUser()
    return (
        <nav className="nav">
            <NavLink to="/" onClick={() => setRoute("Home")}>Home</NavLink>
            <NavLink to="/cart" onClick={() => setRoute("Cart")}>Cart</NavLink>
        </nav>
    )
}
