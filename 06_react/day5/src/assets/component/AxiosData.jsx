import {useState, useEffect} from "react";
import axios from "axios";

function AxiosData() {
    let [data, setData] = useState([]);
    useEffect(()=>{
        let AxiosData = async () => {
            let response  = await axios.get("https://fakestoreapi.com/products");
            setData(response.data);
        };
        AxiosData();
    }, []);
  return (
    <div>
        <h1>AxiosData</h1>
         {/* {
           data.map((item, index)=>{
            return (
                <div key={index}>
                </div>
            )
           }) 
        } */}
        {
           data.map((item)=>{
            return (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </div>
            )
           }) 
        }
    </div>
  )
}

export default AxiosData