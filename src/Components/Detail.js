import React from 'react'
import './Detailcss.css';
import { handleText } from '../Utils/Handletext';
function Detail() {
    return (
        <>
            <div className='our-service' style={{ width: '100%' }}>
                <div className="box-service">
                    <h1>OURE SERVICE</h1>
                </div>
            </div>
            <div className="contianer">

                <div class="row">
                    <div class="col-sm-6 col-lg-3 roun-img">
                        <div className='pic-des'>
                            <div className="pic">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRot4TjTK3vHURFN4xf4lqTQAo1U4qEXyhYg&usqp=CAU" alt=""
                                    style={{ width: '13rem', height: '13rem' }} />
                            </div>
                            <div className='des'>
                                <h1>SHOPE</h1>
                                {
                                    handleText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos, aut reprehenderit corrupti voluptatibus similique alias dolore officia unde repellendus cum, voluptas iste consectetur ipsum illum quos nemo necessitatibus aliquam!', 100)
                                }
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 col-lg-3 roun-img">
                        <div className='pic-des'>
                            <div className="pic">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1-LhTjTORRRf6ySsr3moY4jneJNEtVLTuA&usqp=CAU" alt=""
                                    style={{ width: '13rem', height: '13rem' }} />
                            </div>
                            <div className='des'>
                                <h1>Online</h1>
                                {
                                    handleText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos, aut reprehenderit corrupti voluptatibus similique alias dolore officia unde repellendus cum, voluptas iste consectetur ipsum illum quos nemo necessitatibus aliquam!', 100)
                                }
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 col-lg-3 roun-img">
                        <div className='pic-des'>
                            <div className="pic">
                                <img src="https://cdn.worldvectorlogo.com/logos/google-custom-search.svg" alt=""
                                    style={{ width: '13rem', height: '13rem' }} />
                            </div>
                            <div className='des'>
                                <h1>SEARCH</h1>
                                {
                                    handleText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos, aut reprehenderit corrupti voluptatibus similique alias dolore officia unde repellendus cum, voluptas iste consectetur ipsum illum quos nemo necessitatibus aliquam!', 100)
                                }
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 col-lg-3 roun-img">
                        <div className='pic-des'>
                            <div className="pic" >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt=""
                                    style={{ width: '13rem', height: '13rem' }} />
                            </div>
                            <div className='des'>
                                <h2>Socail Media</h2>
                                {
                                    handleText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos, aut reprehenderit corrupti voluptatibus similique alias dolore officia unde repellendus cum, voluptas iste consectetur ipsum illum quos nemo necessitatibus aliquam!', 100)
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='our-service' style={{ width: '100%' }}>
                <div className="box-service">
                    <h1>OURE SHOP</h1>
                </div>
            </div>
        </>
    )
}

export default Detail