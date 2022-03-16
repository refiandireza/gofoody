import './App.css'
import Header from './component/Header'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Pages from './page/Pages'
import Sidebar from './component/Sidebar'
import { BrowserRouter } from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className='lg:grid lg:grid-cols-12'>
        <Sidebar/>
        <div className='lg:col-span-9 2xl:col-span-10 lg:px-5 lg:pt-5 bg-slate-50'>
          <Banner/>
          <Pages/>

        </div>

      </div>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
