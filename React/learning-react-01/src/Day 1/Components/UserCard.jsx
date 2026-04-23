import React from 'react'
// const UserCard = ({user:{username,regNo}}) => {
const UserCard = (props) => {
    let {user:{username,regNo}} = props;
  return (
    <div>
        <span>
        {/* Name:{props.user.username} */}
        Name:{username}
        </span> 
        <br />    
        <span>
        {/* Registration Number: {props.user.regNo} */}
        Registration Number: {regNo}
        </span>
        <br/>
    </div>
  )
}

export default UserCard