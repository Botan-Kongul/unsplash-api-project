import { useState } from 'react'
import './App.css'
import SearchHeader from "./SearchHeader"
import searchImages from './api.jsx'
import ImageList from './components/ImageList'


function App() {
  const [Images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const reuslt = await searchImages(term)
    setImages(reuslt)
  }

  return (
    <>
      <div className='App'>
        <SearchHeader search={handleSubmit} />
        <ImageList ImagesPlaceHolder={Images} />
      </div >
    </>
  )
}

export default App
