import React from 'react'

const ProductCard = ({ data }) => {
    return (
        <div className="carousel-item card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="ant.jpg"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Product Name</h2>
                <p>Mauris at tellus scelerisque risus commodo luctus sit amet vel neque. Phasellus sed viverra enim. Proin molestie nunc eu finibus.</p>
                <div className="pt-2 card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard