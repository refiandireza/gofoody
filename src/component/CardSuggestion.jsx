import { BsFillPeopleFill } from "react-icons/bs"
import { Link } from "react-router-dom";

function CardSuggestion({data}) {
    return(
        <div className="group max-w-[250px] shadow-md overflow-hidden rounded-md h-full w-full ">
            <figure className="h-[110px] lg:h-[160px] w-full overflow-hidden relative bg-slate-50">
                <img className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 object-cover h-full w-full" loading="lazy" src={data.image ? data.image : '/src/img/NoImageFound.png'} alt={data.title}/>
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500/[.2] to-teal-500/[.2] group-hover:bg-none"/>
            </figure>
            <div className="p-2 bg-slate-50">
                <h3 className="text-sm truncate ">{data.title}</h3>
                <p className="text-xs pt-2">Price: $ {data.pricePerServing}</p>
                <div className="flex flex-row items-center py-1">
                    <BsFillPeopleFill size="12px"/>
                    <p className="ml-2 text-xs">{data.servings} Servings</p>
                </div>
            </div>
        </div>

        
    )
}

export default CardSuggestion;