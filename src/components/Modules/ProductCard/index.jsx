import React from 'react'

const ProductCard = () => {
    return (
        <div className="carousel-item card card-compact bg-base-100 w-56 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body bg-slate-500">
                <h2 className="card-title bg-transparent">Shoes!</h2>
                <p className='bg-transparent'>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end bg-transparent">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard