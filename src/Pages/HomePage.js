import React from 'react'
import CardHome from '../Components/CardHome'
import Slider from '../Components/Slider'
function HomePage() {
  return (
    <div className='container'>
       <div className='slider'>
       <Slider/>
       </div>
        {/* <h1>This Is Shopping</h1> */}
        <CardHome/>
       
    </div>
  )
}

export default HomePage