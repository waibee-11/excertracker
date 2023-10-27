import React from 'react'
import { Link } from 'react-router-dom'

export default function Exercise(props) {

  return (
    <div>
        <div className="grid exercise-table">
            <span>{props.exercise.username}</span>
            <span>{props.exercise.description}</span>
            <span>{props.exercise.duration}</span>
            <span>{props.exercise.date.substring(0,10)}</span>
            <span>
                <Link className='edit-link' to={"/edit/" + props.exercise._id}>Edit</Link> | <a className='delete-link' href='#' onClick={() => {props.deleteExercise(props.exercise._id)}}>Delete</a>
            </span>
        </div>
    </div>
  )
}
