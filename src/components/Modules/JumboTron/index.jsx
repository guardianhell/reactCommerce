import React from 'react'

const JumboTron = () => {
    return (
        <div className='relative p-10'>
            <div className="relative carousel w-[60%] h-[350px] rounded-2xl left-1/2 -translate-x-1/2 ">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="Mario.jpg"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="game_wallpaper_thumbnail__sova_valorant_by_ananttripathi_de9bpv4-fullview.jpg"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="mobile-legends-bang-bang.jpg"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="thumb-099-dota-2-4.jpg"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    )
}

export default JumboTron