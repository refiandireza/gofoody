import Search from "./Search";

function Banner() {
    return(
        <div role='banner' className="banner h-96 xl:h-[450px] w-full lg:rounded-xl">
            <div className="flex justify-center items-center text-white text-center h-full px-3 flex-col ">
                <h1 className="text-5xl leading-[4rem] md:leading-none">Looking for Food ?</h1>
                <p className="text-xl mt-5">Go find your favorite foods with our Apps</p>
                <Search/>
            </div>
        </div>
    )
}

export default Banner;