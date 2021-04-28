import React, { useEffect, useState } from 'react';
import logo from '../../image/ne.png'
import avatar from '../../image/avatar.png'
import './Nav.css'

const Nav = () => {

    const [show, handelShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                handelShow(true)
            }else{
                handelShow(false) 
            }
        })
        return() => {
            window.removeEventListener('scroll')
        }
    } ,[])


    return (
        <nav className={`nav ${show&& "nav__black"}`}>
            <img className="logo" src={logo} alt="Netflix Logo"/>
            <img className="avatar" src={avatar} alt="Netflix Avatar"/>
        </nav>
    );
};

export default Nav;