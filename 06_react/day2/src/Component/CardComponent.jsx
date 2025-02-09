
// function CardComponent({name = "Shishir", desc = "i am a teacher", collegename = "Dursikshya"}) {
//   return (
//     <>
//         <div>
//             <h1>{name} </h1>
//             <p>{desc}</p>
//             <h2>{collegename}</h2>
//         </div>
//         </>
//   )
// 

// props = properties

import propsTypes from 'prop-types'

function CardComponent(props) {
    const {name, desc} = props
  return (
    <>
        <div>
            <h1>{name} </h1>
            <p>{desc}</p>
            <h2>{props.collegename}</h2>
        </div>
    </>
  )
}

CardComponent.propTypes = {
    name: propsTypes.string,
    desc: propsTypes.string,
    collegename: propsTypes.string
}

CardComponent.defaultProps = {
    name: "Shishir",
    desc: "i am a teacher",
    collegename: "Dursikshya"
}

export default CardComponent