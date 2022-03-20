import { Divide as Hamburger } from 'hamburger-react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import { MdFastfood } from "react-icons/md";


function Header() {
    const [isOpen, setOpen] = useState(false);
    
    return(
        <header className="h-[60px] sticky top-0 z-20 bg-teal-600 flex justify-between items-center px-5 lg:px-10">
            <Link to={'/'} className='text-2xl text-white text-bold flex flex-row items-center justify-around'><MdFastfood size='.95em'/> <h2 className='ml-2'>GoFoody</h2></Link>
            <nav className=''>
                <ul className='md:flex flex-row hidden'>
                    <Link to={'/favorite/'}>
                        <li className='text-white mr-5 text-2xl'>Favorite</li>
                    </Link>
                    <li className='text-white text-2xl'>About</li>
                </ul>
                <div className='md:hidden'>
                    <Hamburger color="#fff" rounded />

                </div>
            </nav>
        </header>
    )
}

export default Header;