import React from 'react';
import UserList from './UserList';
const User = ({ name, location, email, picture }) => {
    return (
        <>
            <div className='random_user'>
                <div className='user-image'>
                    <img src={picture.medium} alt={name.first} className='image' />
                </div>
                <div className="user-details">
                    <div className='name'><strong>Name :</strong>{name.first} {name.second}</div>
                    <div className='country'><strong>Country :</strong>{location.country}</div>
                    <div className='email'><strong>Email :</strong>{email}</div>
                </div>
            </div>
            <h3 className='border'></h3>

        </>
    )
}
export default User