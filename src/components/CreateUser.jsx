import React from 'react'
import axios from 'axios'

export default function CreateUser() {

    const [username, setUsername] = React.useState('');

    function submitForm(e){
        e.preventDefault();

        const user = {
            username: username
        }

        console.log(user);

        axios.post('http://localhost:3000/users/add', user)
        .then(res => console.log(res.data));


        window.location = '/';
    }

  return (
    <div className='flex form-container'>
        <h3 className='header'>Create New User</h3>
        <form onSubmit={submitForm} className='flex form'>
            <div className="form-group flex">
                <h4>Username: </h4>
                <input  type="text" 
                        name="description" 
                        id="description"
                        placeholder='Enter username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
            </div>
            <div className="container">
                <input type="submit" value="Add New User" className='submit-button' />
            </div>
        </form>
    </div>
    // <div>
    //     <h3>Create new User</h3>
    //     <form onSubmit={submitForm}>
    //         <div className="form-group">
    //             <label>Username: </label>
    //             <input  type="text"
    //                     required
    //                     value={username}
    //                     onChange={(e) => setUsername(e.target.value)} />
    //         </div>
    //         <div className="form-group">
    //             <input type="submit" value="Create User" className='btn btn-primary' />
    //         </div>
    //     </form>
    // </div>
  )
}
