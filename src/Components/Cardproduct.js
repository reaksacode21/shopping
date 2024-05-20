import React from 'react'
import './Cardproductcss.css'
import { FaArrowCircleRight } from "react-icons/fa";
function Cardproduct() {
    return (
        <div class="card">
            <figure>
                {/* <div className='pic' style={{ backgroundImage: "url('https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg')" }}>
                   
                </div> */}
                <img src="https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg" alt="" />
            </figure>
            <section class="details" >
                <div class="min-details">
                    {/* <h3>Remera <span>azul</span></h3> */}
                    <h3>Shirt</h3>
                    <h3 class="price">$45.99</h3>
                </div>

                <div class="options ">
                    <div class="options-size">
                        <h3>sizes</h3>
                        <ul>
                            <li>xs</li>
                            <li>s</li>
                            <li>m</li>
                            <li>l</li>
                            <li>xl</li>
                        </ul>
                    </div>

                    <div class="options-colors">
                        <h3>colors</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                </div>
                <div className='row'>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <a href="#" class="btn btn-danger">Details</a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <a href="#" class="btn btn-danger">Buy</a>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Cardproduct