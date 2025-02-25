import AllProduct from '../Component/AllProduct'
import AllCategory from '../Component/AllCategory'

function Home() {
  return (
   <div className='container mx-auto'>
      <AllCategory />
      <AllProduct />
   </div>
  )
}
export default Home