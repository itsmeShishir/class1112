import propsTypes from 'prop-types'

function HelloComp({children}) {
  return (
    <div className='HeloComp'>
        {children}
    </div>
  )
}

HelloComp.propsTypes = {
    children: propsTypes.node
}

export default HelloComp