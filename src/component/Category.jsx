import { NavLink } from "react-router-dom";

function Category(){
    return(
        <div className="pt-5 px-5 grid grid-cols-3 gap-2 lg:hidden">
            <NavLink to={'/cuisine/Italian'} className="bg-teal-600 text-white text-center py-1 rounded-md active:bg-teal-50">
                <h2>Italian</h2>
            </NavLink>
            <NavLink to={'/cuisine/American'} className="bg-teal-600 text-white text-center py-1 rounded-md">
                <h2>American</h2>
            </NavLink>
            <NavLink to={'/cuisine/Indian'} className="bg-teal-600 text-white text-center py-1 rounded-md">
                <h2>Indian</h2>
            </NavLink>
            <NavLink to={'/cuisine/Chinese'} className="bg-teal-600 text-white text-center py-1 rounded-md">
                <h2>Chinese</h2>
            </NavLink>
            <NavLink to={'/cuisine/Japanese'} className="bg-teal-600 text-white text-center py-1 rounded-md">
                <h2>Japanese</h2>
            </NavLink>
            <NavLink to={'/cuisine/Korean'} className="bg-teal-600 text-white text-center py-1 rounded-md">
                <h2>Korean</h2>
            </NavLink>
            
        </div>
    )
}

export default Category;