import '../App.css';
import { useDispatch, useSelector } from "react-redux"
import { deleteName, editName } from '../utils/store/NameSlice';
import { useState } from 'react';

function Second(){
    const nameslice = useSelector((store:any)=>store.name)
    const dispatch = useDispatch()
    const [edit,setEdit] = useState(false)

    const changeName = (id:number)=>{
        const name = (document.getElementById('newname')as HTMLInputElement).value
        dispatch(editName({name,id}))
        setEdit(false)
    } 
    function removeName(name:any){
        dispatch(deleteName(name))
    } 
    return(
        <div className="App">
        <div className='title'><h1>Second Component</h1></div>
        <div className='ctn1'>
        {nameslice.namelist.map((name:any)=><div key={name.id} className='card'><span>id: {name.id}</span>
        {edit?<input id='newname' type='text' defaultValue={name.name}/>:<span>Name: {name.name}</span>}
        {edit?<button className='edit-btn' onClick={()=>{changeName(name.id)}}>Save</button>:<button className='edit-btn' onClick={()=>{setEdit(true)}}>Edit</button>}
        <button className='del-btn' onClick={()=>{removeName(name)}}>Delete</button>
        </div>)}
        </div>
      </div>)
}
export default Second