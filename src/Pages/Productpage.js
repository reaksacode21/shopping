import React from 'react'
import CardHome from '../Components/CardHome'


function Productpage() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <div className="all-catagary">
                    <ul>
                        
                    </ul>
                  </div>
                </div>
                <div className="col-sm-10 col-md-10 col-lg-10 ">

                    
                    <CardHome/>
                    {/* <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <h1 className='bg-danger'>Navbar</h1>

                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <h1 className='bg-danger'>Navbar</h1>

                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <h1 className='bg-danger'>Navbar</h1>

                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <h1 className='bg-danger'>Navbar</h1>

                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Productpage