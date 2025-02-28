import {useState, useEffect} from 'react'
import fetchData from '../services/FetchService'
import { Link } from 'react-router-dom'

function AllCategory() {
    let [category, SetCategory] = useState([])
    useEffect(()=>{
       try{
         let fetchDatas = async()=>{
        let response = await fetchData('https://python.bhandarishishir.com.np/api/categories/')
        SetCategory(response.data)
        }
        fetchDatas()
       }catch(e){
            console.log(e.message);
       }
    },[])
  return (
    <div className='w-[85vw] mx-auto mt-4'>
    <h1 className=' pt-2 mt-4 font-extrabold text-3xl text-center'>All Category</h1>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center '>
      {
        category.map((items, index)=>{
            return <Link to={`singlecategory/${items.id}`} className="card image-full sm:max-w-sm" key={index}>
                <figure><img src={items.category_image} alt="overlay image"  className='w-24 h-24 rounded-lg'/></figure>
                <div className="card-body">
                    <h2 className="card-title mb-2.5 ">{items.name}</h2>
                </div>
            </Link>  
        })
      }
    </div>
    </div>
  )
}

export default AllCategory