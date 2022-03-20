import Home from "./Home"
import Cuisine from "./Cuisine"
import SearchPage from "./SearchPage"
import RecipePage from "./RecipePage"
import Empty from '../component/Empty'
import {Route, Routes} from 'react-router-dom'
import MealType from "./MealType"
import FavoritePage from './FavoritePage'

function Pages() {
    return(
            <Routes>
                <Route path='/cuisine/:type' element={<Cuisine/>}/>
                <Route path='/type/:type' element={<MealType/>}/>
                <Route path='/search/:search' element={<SearchPage/>}/>
                <Route path='/recipe/:name' element={<RecipePage/>}/>
                <Route path='/favorite/' element={<FavoritePage/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<Empty/>}/>
            </Routes>
    )
}
export default Pages;