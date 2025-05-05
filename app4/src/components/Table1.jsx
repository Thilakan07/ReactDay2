import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Table1 = () => {
  var[student,SetStudent]=useState([])
  const navigate=useNavigate()
    axios.get("http://localhost:3004/student") 
    .then((res)=>{
        console.log(res.data)
        SetStudent(res.data)
    })
    const deletestudent=(id)=>{
      axios.delete("http://localhost:3004/student/"+id)
      alert("1 Deleted sucessfully")
    }
    const updatestudent=(student)=>{
      navigate("/a",{state:{student}})
    }
  return (
    <div>
      <TableContainer>
        <Table border="1" >
            <TableHead>
                <TableRow>
                    <TableCell> R_no</TableCell>
                    <TableCell> Name</TableCell>
                    <TableCell> Course</TableCell>
                    <TableCell> Grade</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {student.map((val)=>{
                    return(
                        <TableRow>
                <TableCell>{val.roll_no}</TableCell>
                    <TableCell>{val.name} </TableCell>
                    <TableCell>{val.course} </TableCell>
                    <TableCell> {val.grade}</TableCell> 
                    <TableCell>
                      <Button variant='contained' color='error' onClick={()=>deletestudent(val.id)} >Delete</Button> &nbsp;
                      <Button variant='contained' color='error'onClick={()=>updatestudent(val)}  >Update</Button>
                    </TableCell>
                </TableRow>

                    )
                })}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
  )
}

export default Table1
