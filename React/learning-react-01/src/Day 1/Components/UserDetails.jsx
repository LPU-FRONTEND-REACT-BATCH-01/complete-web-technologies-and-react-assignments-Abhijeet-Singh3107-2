
import React from 'react'
import UserCard from './UserCard';

const UserDetails = () => {
 
    let user1 = {
        username : "Abx",
        regNo: 123,
    };

    let user2 = {
        username : "Aby",
        regNo: 12355,
    };

    let user3 = {
        username : "Abz",
        regNo: 1232,
    };
  return (
    <div>
        <UserCard user={user1}/>
        <UserCard user={user2}/>
        <UserCard user={user3}/>
    </div>
  )
}

export default UserDetails


