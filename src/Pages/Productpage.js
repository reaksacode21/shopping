import React from 'react'
import Cardproduct from '../Components/Cardproduct'
import './Productpage.css'

function Productpage() {
    return (
        <div className='all-pro'>
            <div className="row bg">
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <table class="table table-dark table-hover">
                        <ul>
                            <li>PRODUCT</li>
                            <li>PRODUCT</li>
                            <li>PRODUCT</li>
                            <li>PRODUCT</li>
                        </ul>
                    </table>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-10  all-cardp">
                    <div className="row card-bg">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2  bg-warning  card-p">
                            <Cardproduct />

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2  bg-warning  card-p">
                            <Cardproduct />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2  bg-warning  card-p">
                            <Cardproduct />

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2  bg-warning  card-p">
                            <Cardproduct />

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2  bg-warning  card-p">
                            <Cardproduct />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2  bg-warning  card-p">
                            <Cardproduct />

                        </div>
                        {/* <div className="col-sm-12 col-md-6 col-lg-6  bg-warning  card-p">
                            <Cardproduct />
                        </div> */}
                        {/* <div className="col-sm-6 col-md-6 col-lg-4 card-p">
                        <Cardproduct/>

                        </div> */}
                        {/* <div className="col-sm-6 col-md-4 col-lg-3">
                        <Cardproduct/>

                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productpage