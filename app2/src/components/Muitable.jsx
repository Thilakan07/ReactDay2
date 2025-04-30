import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Muitable = () => {
    var data=[{name:"tiya",age:12,place:"tvm"},
               {name:"sam",age:13,place:"alv"}
    ] 
  return (
    <div className='tab'>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              "{data.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell> {val.name}</TableCell>
                        <TableCell> {val.age}</TableCell>
                        <TableCell> {val.place}</TableCell>
                    </TableRow>
                )
              })}  

            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Muitable
