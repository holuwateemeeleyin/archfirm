import React from "react";
import './header.css'
import { Link } from 'react-router-dom'
const Header = ()=> {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to='/' className="text"> archfirm </Link>
                </div>
                <div className="right">
                    right
                </div>
            </div>
        </header>
    )
}

export default Header