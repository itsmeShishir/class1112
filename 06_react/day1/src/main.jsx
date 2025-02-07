import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
// import ClassComp from './ClassComp.jsx'
// import React from 'react'

// let abcd = React.createElement('h1', { className: 'hellosss' }, 'Niresh')
// let efgh = React.createElement('h1', null, 'Bijendra shrestha')
createRoot(document.getElementById('root')).render(
    // <div>
    //     {abcd}
    //     {efgh}
    // </div>
    <App />
    // <ClassComp />

)
