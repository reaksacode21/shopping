import React from 'react'
import './Cardproductcss.css'
import { FaArrowCircleRight } from "react-icons/fa";
function Cardproduct() {
    return (
        <div class="card">
            <figure>
                <img src="https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg" alt="t-shirt" />
            </figure>
            <section class="details pt-1" >
                <div class="min-details">
                    <h1>Remera <span>azul</span></h1>
                    <h1 class="price">$45.99</h1>
                </div>

                <div class="options">
                    <div class="options-size">
                        <h1>sizes</h1>
                        <ul>
                            <li>xs</li>
                            <li>s</li>
                            <li>m</li>
                            <li>l</li>
                            <li>xl</li>
                        </ul>
                    </div>

                    {/* <div class="options-colors mt-1">
                        <h1>colors</h1>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> */}
                </div>
                <a href="#" class="btn">Add Product</a>
            </section>
        </div>

    )
}

export default Cardproduct