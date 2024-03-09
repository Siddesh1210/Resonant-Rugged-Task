import React from 'react'

const CoverImage_Product = ({url}) => {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center mb-3">
            <div className="col-md-12">
                <img src={url} alt="Watch Cover Image" lazy="loading" className='img-fluid rounded'/>
            </div>
        </div>
    </div>
  )
}

export default CoverImage_Product