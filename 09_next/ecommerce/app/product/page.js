"use client"
import React, { useMemo, useCallback, useRef, useState, useEffect } from 'react';
import axios from 'axios';

const API = "https://jsonplaceholder.typicode.com/posts";

function Page() {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const [bgColor, setBgColor] = useState("white");
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(API).then((res) => {
      setData(res.data);
    });
  }, []);

  const filteredData = useMemo(() => {
    console.log("Filtering data");
    return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
  }, [data, query]);

  const changeBackground = useCallback(() => {
    const colors = ["red", "green", "blue", "yellow", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setBgColor(randomColor);
    if (containerRef.current) {
      containerRef.current.style.backgroundColor = randomColor; 
    }
  }, []);

  return (
    <div ref={containerRef} style={{ padding: "30px", transition: "0.3s", backgroundColor: bgColor }}>
      <h2>API Fetching</h2>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={changeBackground}>Change Background Color</button>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;