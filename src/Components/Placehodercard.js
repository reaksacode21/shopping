import React from 'react'
import './Placehodercardcss.css'
function Placehodercard() {
  return (
    <div className="placeholder-card card p-0" aria-hidden="true" style={{ width: '350px' }}>
      <div className="p-absolute image-pard" style={{ width: '350px' }}>
        <img
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          className="card-img-top img-fluid"
          alt="default image placeholder "
        />


      </div>

      <div className="card-body">

        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>

        </p>
      </div>
    </div>

  )
}

export default Placehodercard