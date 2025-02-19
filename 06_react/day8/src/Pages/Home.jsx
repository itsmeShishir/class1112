import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
function Home() {
  let [product, SetProduct] = useState([])
  useEffect(()=>{
    let fetchData = async()=>{
      let response = await axios.get("https://api.escuelajs.co/api/v1/products/")
      SetProduct(response.data)
    }
    fetchData()
  })

  // description -> split , slice, join
  let descriptionData = (desc, limit = 20 )=>{
    let description = desc.split(' ')
    if(description.length > limit){
      return description.slice(0, limit).join(' ') + '...'
    }
    return desc
  }
  

  return (
   <div className='container mx-auto'>
    <h1>All Products</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center '>
        {
          product.map((items, index)=>{
            return(
              <div key={index} className='bg-gray-100 p-4 rounded-lg shadow-md flex flex-col
               items-center gap-5 '>
                <img src={items.images[0] } alt="" className='w-[250px]'/>
                <h1 className='text-4xl font-bold'>
                  {items.title}
                </h1>
                <p className='text-md font-medium'>{descriptionData(items.description)}</p>
                <p className='text-2xl font-bold'>price:{items.price}</p>
              </div>
            )
          })
        }
    </div>
   </div>
  )
}
export default Home