import React from 'react'
import './Cardproductcss.css'

import { handleText } from '../Utils/Handletext';
function Cardproduct({ products }) {
    return (
        <div class="card">
            <figure>
                {/* <div className='pic' style={{ backgroundImage: "url('https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg')" }}>
                   
                </div> */}
                <img src={products.images} alt=""  style={{width:'100%',height:'400px'}}/>
            </figure>
            <section class="details" >
                <div class="min-details">
                    {/* <h3>Remera <span>azul</span></h3> */}
                    <h3>{handleText(products.title,10)}</h3>
                    <h3 class="price">{products.price +"$"}</h3>
                </div>

                <div class="options ">
                    <div class="options-size">
                        <h3 style={{color:"green"}} >sizes</h3>
                        <ul>
                            <li>xs</li>
                            <li>s</li>
                            <li>m</li>
                            <li>l</li>
                            <li>xl</li>
                        </ul>
                    </div>

                    <div class="options-colors">
                        <h3 style={{color:"green"}}>colors</h3>
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
                        <a href="#" class="btn btn-success">Details</a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <a href="#" class="btn btn-success">Buy</a>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Cardproduct