import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Exercise from './Exercise';
import { Link } from 'react-router-dom';


export default function ExercisesList() {

    const [exercises, setExercises] = useState([]);

    function deleteExercise(id){
        axios.delete('http://localhost:3000/exercises/' + id)
        .then(res => console.log(res.data));
        
        setExercises(exercises.filter(el => el._id !== id))
    }

    function exercisesList(){
        return exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} />
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/exercises/')
        .then(response => {
            setExercises(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


  return (
    <div>
        <h3 className='header'>Logged Exercises</h3>
        <div className="flex add-exercise-button">
            <Link to="/create" className="add-exercise">Create Exercises Log</Link>
        </div>
        <div className="grid table">
            <span>
                <strong>Username</strong>
            </span>
            <span>
                <strong>Description</strong>
            </span>
            <span>
                <strong>Minutes</strong>
            </span>
            <span>
                <strong>Date</strong>
            </span>
            <span>
                <strong>Actions</strong>
            </span>
        </div>
        <div className="data-table">{ exercisesList() }</div>
        {/* <table className="">
            <thead className='flex table-head'>
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { exercisesList() }
            </tbody>
        </table> */}
    </div>
  )
}
