import React from 'react'
import './Footercss.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub,FaInstagram ,FaPhone,FaFacebookMessenger,
    FaMap
} from "react-icons/fa";
function Footer() {
    return (
        <>
           
            <footer>
                <div class="main-content">
                    <div class="left box">
                        <h2>About us</h2>
                        <div class="content">
                            <p>reaksaCode21 is a YouTube channel where you can learn web designing, web development, ui/ux designing, html css tutorial, hover animation and effects, javascript and jquery tutorial and related so on.</p>
                            <div class="social">
                                <a href="httpsss"><span><FaFacebook/></span></a>
                                <a href="#"><span class="fab fa-twitter"><FaTwitter/></span></a>
                                <a href="https:/sssp"><span class="fab fa-instagram"><FaInstagram/></span></a>
                                <a href="http"><span class="fab fa-youtube"><FaLinkedin/></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="center box">
                        <h2>Address</h2>
                        <div class="content">
                            <div class="place">
                                <span class="fas fa-map-marker-alt"><FaMap/></span>
                                <span class="text">Teouk thla,Phnom Penh</span>
                            </div>
                            <div class="phone">
                                <span class="fas fa-phone-alt"><FaPhone/></span>
                                <span class="text">+089-765432100</span>
                            </div>
                            <div class="email">
                                <span class="fas fa-envelope"><FaFacebookMessenger/></span>
                                <span class="text">reaksa2333@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div class="right box">
                        <h2>Contact us</h2>
                        <div class="content">
                            <form action="#">
                                <div class="email">
                                    <div class="text">Email *</div>
                                    <input type="email" />
                                </div>
                                <div class="msg">
                                    <div class="text">Message *</div>
                                    <textarea rows="2" cols="25" required></textarea>
                                </div>
                                <div class="btn">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <center>
                        <span class="credit">Created By <a href="https">REAKSA SG RA</a> | </span>
                        <span class="far fa-copyright"></span><span> 2024 All rights reserved.</span>
                    </center>
                </div>
            </footer>
        </>
    )
}

export default Footer