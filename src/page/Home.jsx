import Popular from '../component/Popular'
import Dessert from "../component/Dessert";
import Category from '../component/Category';
import Suggestion from '../component/Suggestion';

function Home() {
    return(
        <>
            <Category/>
            <main className="bg-slate-50">
                <Popular />
                <Dessert/>
                <Suggestion/>
            </main>
        </>
    )
}

export default Home;