import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductCard from '../ProductCard/ProductCard';
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

  console.log(fetchedProducts.products);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          {/* <Sidebar /> */}
          <Home />
          <div className="product-list">
            {isFetching ? (
              <p>Loading...</p>
            ) : (
              fetchedProducts.products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              ))
            )}
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}
