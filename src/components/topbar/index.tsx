import React from "react";
import { Container } from "./style";
import {NavLink} from "react-router-dom"

export default function Header() {
    return (
        <Container>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'selected-btn' : 'btn__style'} >
                <span>Home</span>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? 'selected-btn' : 'btn__style'}>
                <span>About</span>
            </NavLink>
        </Container>
    )
}