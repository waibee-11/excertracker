import React, { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
export default function CreateExercise() {

    const [username, setUsername] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [duration, setDuration] = React.useState(0);
    const [date, setDate] = React.useState(new Date());
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(response => {
            if (response.data.length > 0){
                setUsers(response.data.map(user => user.username))
                setUsername(response.data[0].username)
            }
        })
    }, [])

    function submitForm(e){
        e.preventDefault();
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }

        console.log(exercise)

        axios.post('http://localhost:3000/exercises/add', exercise)
        .then(res => console.log(res.data));


        window.location = '/';
    }

  return (
    <div className='flex form-container'>
        <h3 className='header'>Create Exercise Log</h3>
        <form onSubmit={submitForm} className='flex form'>
            <div className="form-group flex">
                <h4>Username: </h4>
                <select  type="text" 
                        name="username" 
                        id="username"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        >
                            {
                            users.map((user) => {
                                return <option
                                        key={user}
                                        value={user}>{user}</option>
                            })
                        }
                        </select>
            </div>
            <div className="form-group flex">
                <h4>Description: </h4>
                <input  type="text" 
                        name="description" 
                        id="description"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
            </div>
            <div className="form-group flex">
                <h4>Duration: </h4>
                <input  type="number" 
                        name="duration" 
                        id="duration"
                        placeholder='Duration (mins)'
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        />
            </div>
            <div className="form-group flex">
                <h4 className="date-field-name">Date: </h4>
                <DatePicker
                        selected={date}
                        onChange={(e) => setDate(e)}>
                </DatePicker>
            </div>
            <div className="container">
                <input type="submit" value="Create Exercise Log" className='submit-button' />
            </div>
        </form>
    </div>
    // <div>
    //     <h3>Create New Exercise Log</h3>
    //     <form onSubmit={submitForm}>
    //         <div className="form-group">
    //             <label>Username: </label>
    //             <select name='userinput'
    //                     required
    //                     className='form-control'
    //                     value={username}
    //                     onChange={(e) => setUsername(e.target.value)}>
    //                     {
    //                         users.map((user) => {
    //                             return <option
    //                                     key={user}
    //                                     value={user}>{user}</option>
    //                         })
    //                     }
    //             </select>
    //         </div>
    //         <div className="form-group">
    //             <label>Description: </label>
    //             <input  type="text"
    //                     required
    //                     className='form-control'
    //                     value={description}
    //                     onChange={(e) => setDescription(e.target.value)} />
    //         </div>
    //         <div className="form-group">
    //             <label>Duration: </label>
    //             <input  type="text"
    //                     className='form-control'
    //                     value={duration}
    //                     onChange={(e) => setDuration(e.target.value)} />
    //         </div>
    //         <div className="form-group">
    //             <label>Date: </label>
    //             <div>
    //                 <DatePicker 
    //                     selected={date}
    //                     onChange={(e) => setDate(e)}></DatePicker>
    //             </div>
    //         </div>

    //         <div className="form-group">
    //             <input type="submit" value="Create Exercise Log" className='btn btn-primary' />
    //         </div>
    //     </form>
    // </div>
  )
}
