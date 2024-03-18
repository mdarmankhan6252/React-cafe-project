import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <main className='md:flex md:items-center'>
         <Blogs/>
         <Bookmarks/>
      </main>
    </>
  )
}

export default App
