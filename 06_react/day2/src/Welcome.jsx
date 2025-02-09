// import React from 'react'
import CardComponent from "./Component/CardComponent"
function Welcome() {
  return (
//    <React.Fragment>
//     <h1> HEllo world </h1>
//     <h1> HEllo world </h1>
//    </React.Fragment>
    <>
    <CardComponent name="niresh" desc= "I am a student" collegename="nesfield College"/>
    <CardComponent name="bigesh" desc="+2 student" collegename="softwaric" />
    <CardComponent name="hari" desc="teacher" collegename="none" />
    <CardComponent />
        
    </>
  )
}

export default Welcome