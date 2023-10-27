import React from 'react'
import './App.css';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import ExercisesList from './components/ExercisesList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
