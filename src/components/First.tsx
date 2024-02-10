import React, { useId } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { getNameList } from '../utils/store/NameSlice';
import { useNavigate } from 'react-router-dom';

function First() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let id = useId()[2]
  const setName = ()=>{
    const name = (document.getElementById("name")as HTMLInputElement).value
    dispatch(getNameList({name,id}))
    navigate("/second")
  }
  return (
    <div className="App">
      <div className='title'><h1>First Component</h1></div>
      <div className='ctn'>
      <label>Name:</label>
      <input className='name' id='name' type='text' placeholder='Enter a Name'/>
      <button className='btn' onClick={setName}>Submit</button>
      </div>
    </div>
  );
}

export default First;
