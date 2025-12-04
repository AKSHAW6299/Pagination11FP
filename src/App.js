import React, { useEffect, useState } from 'react'
import { getProductsApi } from './services/dummyApi'
import ProductCard from './common_components/ProductCard'
import './index.css'
import Pagination from './common_components/Pagination'

function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await getProductsApi()
    // console.log('Api response:: ', response?.data?.products);
    setProducts(response?.data?.products)
  }

  // For pagination
  const PAGE_SIZE = 10
  const totalProducts = products.length
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE)  // Math.ceil to get the last page
  const start = currentPage * PAGE_SIZE
  const end = start + PAGE_SIZE

  const handlePageChange = (n) => {
    setCurrentPage(n)
  }

  const goToPrev = () => {
    setCurrentPage(prev => prev - 1)
  }
  const goToNext = () => {
    setCurrentPage(prev => prev + 1)
  }

  return !products.length ? (
    <h1>No data found</h1>
  ) : (
    <div className='app'>
      <h1 className='text-center m-5 text-4xl'>Pagination</h1>
      <div className='products-container'>
        {
          products.slice(start, end).map((item) => (
            <ProductCard key={item.id} image={item.thumbnail} title={item.title} />
          ))
        }
      </div>
      
      <Pagination
        goToNext={goToNext}
        goToPrev={goToPrev}
        handlePageChange={handlePageChange}
        noOfPages={noOfPages}
        currentPage={currentPage}
      />

    </div>
  )
}
export default App