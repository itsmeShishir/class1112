import {useState, useEffect} from "react";

function DarkMode() {
    const [dark, setDark] = useState('abc');
    // useState(initial Value) -> [], {}, null, 0, false, '', undefined
    // useEffect(()=>{}, [])
    useEffect(()=>{
        console.log("abcdef");
    }, [])
    
  return (
    <div>
        {
            dark ? 
            <button className="bg-black text-white px-4 py-2 border-2" onClick={()=> setDark(!dark)}>
                Dark Mode Change into the Light mode
            </button>
            :
            <>
            <button className="bg-red-500 text-black px-4 py-2 border-2" onClick={()=> setDark(!dark)}>
                Light Mode Change into the dark mode
            </button>
            </>
        }
    </div>
  )
}

export default DarkMode