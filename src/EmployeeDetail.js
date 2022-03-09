import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
function EmployeeDetail({emp,getEmployeeId}) {

  const deleteEmployeeHandler = (id) => {
    getEmployeeId(id);
  };
  return (
    <>
    {
      emp.map((employee) => (
        <Box sx={{ width: 1, borderTop: '2px solid rgb(128,128,128,0.2)', paddingTop: '10px' }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

            <Box gridColumn="span 4">
              <InputLabel htmlFor="component-simple">Name</InputLabel>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1" gutterBottom>
                {employee.name}
              </Typography>
            </Box>
            <Box gridColumn="span 8">
              <InputLabel htmlFor="component-simple">Mobile No.</InputLabel>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1" gutterBottom>
               {employee.phone}
              </Typography>
            </Box>
            <Box gridColumn="span 8">
              <InputLabel htmlFor="component-simple">Email ID</InputLabel>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1" gutterBottom>
                {employee.email}
              </Typography>
            </Box>
            <Box gridColumn="span 4">
              <div style={{ textAlign: 'right' }}>
                <Button onClick={()=>{deleteEmployeeHandler(employee.id)}} sx={{ marginBottom: '20px', marginTop: '20px', backgroundColor: 'rgb(237,231,250)' }} variant="Text">Delete</Button>
              </div>
            </Box>

          </Box>
        </Box>
      ))
    }
      </>
  )

}
  

export default EmployeeDetail