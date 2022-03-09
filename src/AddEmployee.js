import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function AddEmployee(props) {
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const addEmp = (e) => {

    e.preventDefault();
    if (contact.name === "" || contact.email === "" || contact.phone === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
        props.addEmployee(contact)
        setContact({
            name: "",
            phone: "",
            email: ""
        })
    }

    return (
        <>
            <TextField
                sx={{
                    color: 'rgb(103,69,170)'
                }}
                required
                fullWidth
                id="name"
                label="Name"
                value={contact.name}
                onChange={(e) => setContact({...contact, name: e.target.value })}
                variant="standard"
            />
            <TextField
             sx={{
                color: 'rgb(103,69,170)'
            }}
                required
                fullWidth
                id="mobile"
                label="Mobile No."
                value={contact.phone}
                onChange={(e) => setContact({...contact, phone: e.target.value })}
                variant="standard"
            />
            <TextField
             sx={{
                color: 'rgb(103,69,170)'
            }}
                required
                fullWidth
                id="email"
                label="Email Id"
                value={contact.email}
                onChange={(e) => setContact({...contact, email: e.target.value })}
                variant="standard"
            />
            <div style={{ textAlign: 'right' }}>
                <Button sx={{ marginBottom: '20px', marginTop: '20px', backgroundColor: 'rgb(237,231,250)' }}
                        onClick={addEmp}
                    variant="Text">Add</Button>
            </div>
        </>
    )
}

export default AddEmployee