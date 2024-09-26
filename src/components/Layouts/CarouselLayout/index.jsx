import React from 'react'

const CarouselLayout = ({ children }) => {
    return (
        <div className="carousel carousel-center bg-transparent rounded-box max-w-full space-x-4 p-4 gap-4">
            {children}
        </div>
    )
}

export default CarouselLayout