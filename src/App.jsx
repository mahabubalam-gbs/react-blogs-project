import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <div className="main-content">
        <div className="left-content">
          <Blogs></Blogs>
        </div>
      </div>
    </>
  )
}

export default App
