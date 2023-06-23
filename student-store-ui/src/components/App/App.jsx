import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {

  const [isFetching, setIsFetching] = useState(true)
  const [fetchedProducts, setFetchedProducts] = useState([])
  
  useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://codepath-store-api.herokuapp.com/store");
        console.log('Fetched!')
        const data = await response.json()
        const products = data.products
        setFetchedProducts(products)
				setIsFetching(false)
			} catch (error) {
				console.error('Error fetching products')
				setIsFetching(false)
			}
		}

		fetchData()
	}, [])
  console.log(fetchedProducts)
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
