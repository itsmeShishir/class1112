import {useParams} from 'react-router-dom'
import fetchData from '../services/FetchService'
import {useState, useEffect} from 'react'

function SingleCategory() {
    let {id} = useParams()
    let [category, SetCategory] = useState([])

   useEffect(()=>{
       try{
         let fetchDatas = async()=>{
        let response = await fetchData(`https://python.bhandarishishir.com.np/api/categories/${id}/products/`)
        SetCategory(response.data)
        }
        fetchDatas()
       }catch(e){
            console.log(e.message);
       }
    },[id])

      // description -> split , slice, join
  let descriptionData = (desc, limit = 20 )=>{
    let description = desc.split(' ')
    if(description.length > limit){
      return description.slice(0, limit).join(' ') + '...'
    }
    return desc
  }
  return (
    <div>
        <h1 className='text-center text-green-500 font-extrabold text-2xl'>All Products</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center '>
        {
          category.map((items, index)=>{
            return(
              <div key={index} className='bg-gray-100 p-4 rounded-lg shadow-md flex flex-col
               items-center gap-5 '>
                <img src={items.images } alt="" className='w-[250px]'/>
                <h1 className='text-4xl font-bold'>
                  {items.title}
                </h1>
                <p className='text-md font-medium'>{descriptionData(items.description)}</p>
                <p className='text-2xl font-bold'>price:{items.price}</p>
                <p>{items.category_name}</p>
                <p>{items.stock}</p>
              </div>
            )
          })
        }
    </div>
    </div>
  )
}

export default SingleCategory