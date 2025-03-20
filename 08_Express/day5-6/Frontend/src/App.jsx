import {useState, useEffect} from "react";
import axios from "axios";
const App = () =>{
  let [data, setData] = useState([]);
  useEffect(()=>{
      try{
        let fetchData = async () => {
          let response  = await axios.get("http://localhost:3000/get-producs");
           console.log(response.data.products);
           setData(response.data.products);
        };
        fetchData();
      }catch(e){
        console.log(e.message);
      }
  }, [])
  
  return(
    <div>
      <h1>Product List</h1>
      <table>
        <tr>
          <th>Product Id</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
        </tr>
       { 
        data.map((item)=>{
          return(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
            </tr>
          ) 
        })
       }
      </table>
    </div>
  )
}

export default App