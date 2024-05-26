import React from 'react'
import './Cardproductcss.css'

import { handleText } from '../Utils/Handletext';
import { useNavigate } from 'react-router-dom';

function Cardproduct({ products }) {
    let navigate=useNavigate();
    let makeId;
    const catchid =()=>{
        makeId=products.id;
        
        console.log(makeId);
    }
    return (
        
        <div class="card">
            <figure>
                {/* <div className='pic' style={{ backgroundImage: "url('https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg')" }}>
                   
                </div> */}
                <img src={products.images}
                onError={
                    ({currentTarget})=>{
                        currentTarget.onerror = null;
                        currentTarget.src = "https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png"
                    }
                }
                alt=""  style={{width:'100%',height:'400px'}}/>
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
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <a href="#" class="btn btn-success"
                         onClick={() => {
                            // navigate(`/shop/${products.id}`);
                            catchid();

                          }}
                        >Details</a>
                    </div>
                    
                </div>
            </section>
        </div>

    )
}

export default Cardproduct