import React from 'react'

const ChildrenProp = (props) => {
    console.log(props);
  return (
    <div>
        {props.children}
        {props.children[0]}
        {props.children[1]}
    </div>
  )
}

export default ChildrenProp