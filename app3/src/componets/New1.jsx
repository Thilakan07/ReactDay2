import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Counter = () => {
 var [name,sname]=useState()
 const output1=()=>{
    sname('r')
 }
 const output2=()=>{
    sname('a')
 }
 const output3=()=>{
    sname('t')
 }
 useEffect(()=>{
    output2()
 },[])

  return (
    <div>
        <h1>welcome:{name}</h1>
        <Button variant='contained'onclick={output1}>r</Button>&nbsp;
        <Button variant='contained'onclick={output2}>a</Button>&nbsp;
        <Button variant='contained'onclick={output3}>t</Button>
    </div>
  )
}

export default Counter
