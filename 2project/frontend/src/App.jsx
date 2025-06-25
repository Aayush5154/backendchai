import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
       axios.get('/api/jokes')
        .then((res) => {
        setJokes(res.data)
        })
        //AB HAMME.json .parse krne ki jarurat nahi hai kyuki axios khud hi ye san chize handle ker deta h
        .catch((err) => {
          console.error('Error fetching jokes:', err)
        })
  },[])

  return (
    <>
     <h1>chai or fullstack</h1>
     <p>JOKES : {jokes.length}</p>
     {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.joke}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
