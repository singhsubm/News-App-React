import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import English from './components/English'
import Hindi from './components/Hindi'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function App() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const { country, language, query } = useSelector((state) => state.news)

  const API_URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY

  const fetchData = async (query, country, language) => {
    try{
      setLoading(true)
      const response = await axios.get(`${API_URL}/search?q=${query}&country=${country}&lang=${language}&apikey=${API_KEY}`)
      const data = response.data.articles 
      setData(data)
      console.log(data)
      setLoading(false)
    }
    catch{
      console.log("Error fetching data")
    }
  }
  useEffect(() => {
    fetchData(query, country, language)
  },[query, country, language])

  return (
    <>
      <div className='min-h-screen w-screen bg-zinc-400'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={'/english'}/>} />
        <Route path="/english" element={<English data={data} language={language} loading={loading}/>} />
        <Route path="/hindi" element={<Hindi data={data} language={language} loading={loading}/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
