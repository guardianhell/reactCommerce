import React from 'react'

const ProductCard = ({ data }) => {
    return (
        <div className="carousel-item card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={data.image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.publisher}</p>
                <div className="pt-2 card-actions">
                    <button className="btn bg-lime-300">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard