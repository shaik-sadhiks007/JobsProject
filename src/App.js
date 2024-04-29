import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { JobsContext } from './components/JobsContext';
import useCustomHook from './components/useCustomHook';
import Home from './components/Home';

function App() {

  const { position, setPosition, location: customLocation, setLocation, posts, handleSearch, setWorkExperience, workExperience, setDateFilter, setSalaryFilter, jobs, setPosts, credentials, setCredentials,isLoggedIn,setIsLoggedIn,user,setUser } = useCustomHook();
  const data = { position, setPosition, location: customLocation, setLocation, posts, handleSearch, setWorkExperience, workExperience, setDateFilter, setSalaryFilter, jobs, setPosts, credentials, setCredentials,isLoggedIn,setIsLoggedIn,user,setUser }

  return (
    <JobsContext.Provider value={data}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </JobsContext.Provider>
  );
}

export default App;
