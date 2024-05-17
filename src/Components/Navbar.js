import React from 'react'
import { FaAlignJustify } from "react-icons/fa";
import './Navbarcss.css'

function Navbar() {
    return (
        <>
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars">

                        <FaAlignJustify />
                    </i>
                </label>
                <label class="logo">BlueShop</label>
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>
            <section></section>
        </>
    )
}

export default Navbar