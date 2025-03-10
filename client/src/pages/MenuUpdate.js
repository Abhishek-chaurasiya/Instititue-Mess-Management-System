import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { FormControl ,InputLabel,Select,MenuItem,TextField,Typography,Container,Grid} from '@mui/material';

function createData(day, breakfast, lunch, dinner) {
  return { day, breakfast,lunch,dinner};
}

const rows = [
  createData('Monday', 237, 9.0, 37),
  createData('Tuesday', 262, 16.0, 24),
  createData('Wednesday', 305, 3.7, 67),
  createData('Thursday', 356, 16.0, 49),
  createData('Friday', 356, 16.0, 49),
  createData('Saturday', 356, 16.0, 49),
  createData('Sunday', 159, 6.0, 24 ),
];

export default function MenuUpdate() {

   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleChange = ()=>{

  }

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
        <Typography sx={{ typography: { lg:'h2' ,sm: 'h3', xs: 'h3' } ,textDecoration:'underline' }} mb={12} >Update Menu</Typography>
        <CssBaseline></CssBaseline>
        <Typography sx={{ typography: { lg:'h3' ,sm: 'h4', xs: 'h5' } }} >Current Menu</Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                 <TableRow>
                    <TableCell>Week Day</TableCell>
                    <TableCell align="right">BreakFast</TableCell>
                    <TableCell align="right">Lunch</TableCell>
                    <TableCell align="right">Dinner</TableCell>
                 </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.day}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.day}
                        </TableCell>
                        <TableCell align="right">{row.breakfast}</TableCell>
                        <TableCell align="right">{row.lunch}</TableCell>
                        <TableCell align="right">{row.dinner}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>  
        </Box>
      </Container>

      {/* UPDATE OPTIONS */}
      <Container component="main" maxWidth="lg" >
        <Box mt={12} mb={20}  >
           <Typography sx={{ typography: { lg:'h3' ,sm: 'h4', xs: 'h5' } }} >Update Menu</Typography>
           <Container maxWidth="sm" >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 , marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Day</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value='monday'
                    label="Day"
                    onChange={handleChange}
                  >
                    <MenuItem value='monday'>Monday</MenuItem>
                    <MenuItem value='tuesday'>Tuesday</MenuItem>
                    <MenuItem value='wednesday'>Wednesday</MenuItem>
                    <MenuItem value='thursday'>Thursday</MenuItem>
                    <MenuItem value='friday'>Friday</MenuItem>
                    <MenuItem value='saturday'>Saturday</MenuItem>
                    <MenuItem value='sunday'>Sunday</MenuItem>
                  </Select>
                </FormControl>

              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Meal</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value='breakfast'
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value='breakfast'>BreakFast</MenuItem>
                    <MenuItem value='lunch'>Lunch</MenuItem>
                    <MenuItem value='dinner'>Dinner</MenuItem>
                  </Select>
                </FormControl>

              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="newmenu"
                  label="New Menu"
                  name="newMenu"
                  autoComplete="family-name"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Menu
            </Button>

            </Box>
           </Container>
        </Box>
      </Container>

      
    </>
  );
}

