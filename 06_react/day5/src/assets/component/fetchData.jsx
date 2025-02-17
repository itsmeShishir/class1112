import {useState, useEffect} from "react";
function FetchData() {
    let [data, setData] = useState([]);
    useEffect(()=>{
        let FetchData = async () => {
            let response =await fetch("https://fakestoreapi.com/products");
            let data = await response.json();
            setData(data);
            
        };
        FetchData();
    }, []);
  return (
    <div>
        <h1>FetchData</h1>
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

export default FetchData