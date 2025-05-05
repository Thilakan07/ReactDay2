import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
    var[inputs,setinputs]=useState({roll_no:"",name:"",course:"",grade:""})
    var location = useLocation()
    const navigate=useNavigate()
    console.log (location.state)
    const handleinput=(e)=>  

        setinputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
    
        const handlesubmit = () => {
          if(location.state !=null){
            //update
            axios.put("http://localhost:3004/student/"+location.state.student.id,inputs)
            alert("updated succesfully")
            navigate("/")
          }
          else{
            //add
            axios.post("http://localhost:3004/student",inputs)
            alert("1 Added succesfully")
            navigate("/")
          }
            
        }
        useEffect(()=>{
        if(location.state !=null){
         setinputs({
          ...inputs,
         roll_no:location.state.student.roll_no,
          name:location.state.student.name,
         course:location.state.student.course,
         grade:location.state.student.grade
})
        }

        },[]) 
    
  return (
    <div>
      <TextField variant='outlined' label="Rno"  name='roll_no' value={inputs.roll_no} onChange={handleinput}/><br />
      <TextField variant='outlined' label="Name" name='name' value={inputs.name} onChange={handleinput}/><br></br>
      <TextField variant='outlined' label="Course"name='course' value={inputs.course}  onChange={handleinput}/><br></br>
      <TextField variant='outlined' label="Grade" name='grade' value={inputs.grade} onChange={handleinput}/><br></br>
      <Button variant='outlined' color='inherent' onClick={handlesubmit}>Submit</Button>
    </div>
  )
}

export default Add
