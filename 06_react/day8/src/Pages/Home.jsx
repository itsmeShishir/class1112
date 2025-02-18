import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
         <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Home