
import './App.css';
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React,{useState,useEffect} from 'react';
import nextId from "react-id-generator";


import EmployeeDetail from './EmployeeDetail';
import AddEmployee from './AddEmployee';
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    }
  },
});
function App() {
  const id = nextId(); 
  const LOCAL_STORAGE_KEY = "employee";
  const [employees, setEmployees] = useState([]);

  const addEmployeeHandler = (employee) => {
    console.log(employees)
    setEmployees([...employees, { id: id, ...employee }]);
  };

  const removeEmployeeHandler = (id) => {
    const newEmployeeList = employees.filter((emp) => {
      return emp.id !== id;
    });

    setEmployees(newEmployeeList);
  };

  useEffect(() => {
    const retriveEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveEmployees) setEmployees(retriveEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Box
            component="form"
            sx={{
              border: '2px solid rgb(128,128,128,0.2)',
              width: 300,
              maxWidth: '100%',
              padding: '20px',
              color: 'rgb(103,69,170)'
            }}
            noValidate
            autoComplete="off"
          >
           <AddEmployee addEmployee={addEmployeeHandler}/>
            <EmployeeDetail emp={employees} getEmployeeId={removeEmployeeHandler}/>
          </Box>

        </ThemeProvider >
      </header>
    </div>
  );
}

export default App;
