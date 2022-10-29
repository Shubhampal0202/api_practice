import React from 'react'
import User from './User'
const UserList = ({ users }) => {
    console.log("UserList ", users);
    return(
        <>
        <div>
            {users && users.map((user)=>{
                return <User key = {user.login.uuid} {...user}></User>
            })}
        </div>
        </>
    )
}
export default UserList
