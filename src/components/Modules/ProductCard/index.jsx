import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ data }) => {

    const navigate = useNavigate()

    return (
        <div className="carousel-item card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={data.product_thumbnail}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{data.product_name}</h2>
                <p>{data.brand}</p>
                <div className="pt-2 card-actions">
                    <button
                        onClick={() => {
                            navigate("/product", {
                                state: { data }
                            }), console.log(data);
                        }}
                        className="btn bg-lime-300 border-transparent text-black hover:bg-lime-500 hover:border-transparent">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

function handleClick(data) {

}
export default ProductCard