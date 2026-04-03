import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <div className="main-content flex w-[80%] justify-between mx-auto">
        <div className="left-content w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-content w-[30%] min-h-fit py-10 pl-10">
          <h1 className='text-2xl font-semibold'>Reading Time: 0</h1>
          <h1 className='text-xl font-semibold'>Bookmarked Count: 0</h1>
        </div>
      </div>
    </>
  )
}

export default App
