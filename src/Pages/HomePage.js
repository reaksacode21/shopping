import React from 'react'
import CardHome from '../Components/CardHome'
import Slider from '../Components/Slider'
import Detail from '../Components/Detail'
function HomePage() {
  return (
    <div className='container'>
       <div className='slider'>
       <Slider/>
       </div>
       <div className='detail'>
      <Detail/>
       </div>
        {/* <h1>This Is Shopping</h1> */}
        <CardHome/>
       
    </div>
  )
}

export default HomePage