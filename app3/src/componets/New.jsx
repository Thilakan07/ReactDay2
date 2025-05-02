import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const New = () => {
 var [name,sname]=useState('')
 const output1=()=>{
    sname("R")
 }
 const output2=()=>{
    sname("A")
 }
 const output3=()=>{
    sname("T")
 }
 useEffect(()=>{
    output2()
 },[])

  return (
    <div>
        <h1>welcome:{name}</h1>
        <Button variant='contained'onClick={output1}>r</Button>&nbsp;
        <Button variant='contained'onClick={output2}>a</Button>&nbsp;
        <Button variant='contained'onClick={output3}>t</Button>
    </div>
  )
}

export default New
