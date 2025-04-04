"use client"
import React, { useMemo, useCallback,useRef,  useState, useEffect } from 'react'
import axios from 'axios'

let API = "https://jsonplaceholder.typicode.com/posts"
function OnePage() {
    const [data, SetData] = useState([])
    const containerRef = useRef(null);
    const [bgColor, setBgColor] = useState("white")
    const [query, setQuery] = useState("");

    useEffect(()=>{
        axios.get(API).then((res)=>{
            SetData(res.data);
        })
    },[])

    const FilterData = useMemo(()=>{
        console.log("filtering data");
        return data.filter((item)=> item.title.includes(query))
    },[data, query])

    const chageBackground = useCallback(()=>{
        const color = ["reg", "green", "blue", "yellow", "purple"]
        const random = color[Math.floor(Math.random() * color.length)]

        setBgColor(random)
        if(containerRef.current){
            containerRef.current.style.background = random
        }
    },[])

  return (

    <div ref={containerRef} style={{padding: "30px", transition: "0.3s"}}>
        <h2>Api fetching</h2>
        <input type="text" placeholder='information' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={chageBackground}>Change Backgorund color</button>
        {
            <ul>
                { 
                    FilterData.map((item)=>{
                        <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        }

    </div>
  )
}

export default OnePage