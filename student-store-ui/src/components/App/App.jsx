import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {

  const [isFetching, setIsFetching] = useState(true)
  const [fetchedProducts, setFetchedProducts] = useState([])
  
  useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://codepath-store-api.herokuapp.com/store"
				)

				setFetchedProducts(response.data)
				setIsFetching(false)
			} catch (error) {
				console.error('Error fetching products')
				setIsFetching(false)
			}
		}

		fetchData()
	}, [])

  return (
    <div className="app">
      <BrowserRouter>
				<Navbar />
				<Sidebar />
				<Home products={fetchedProducts} isFetching={isFetching}/>
      </BrowserRouter>
    </div>
  );
}
