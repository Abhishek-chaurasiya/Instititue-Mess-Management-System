import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
import {useSelector,useDispatch} from 'react-redux'



export default function Navbar() {
  
  
  const {Admin,AccountIcon,Login,SignUp,UpdateMenu,UpdateFee} = useSelector((store)=>store.navbar)
  
  // console.log(Admin,AccountIcon,Login,SignUp)

  // const {,Account} = AdminPageButtons
 

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor:'white' }}>
        <Toolbar> 
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'black' ,fontWeight:'700',letterSpacing:'2px'}}>
          <Link to="/" style={{textDecoration:'none',color:'black'}}>  IMMS </Link>
          </Typography>
         
          <Link to="/updatemenu" style={{textDecoration:'none',color:'black'}}>   <Button variant="contained"  sx={{margin:'10px' ,display:`${UpdateMenu?'block':'none'}` }}>Update Menu</Button> </Link>    
          <Link to="/updatefee" style={{textDecoration:'none',color:'black'}}>  <Button variant="contained"  sx={{margin:'10px' ,display:`${UpdateFee?'block':'none'}`}}>Update Fee</Button> </Link>    
            <Link to="adminpage" style={{textDecoration:'none'}}><Button variant="contained"  sx={{margin:'10px' ,display:`${Admin?'block':'none'}` }}>Admin</Button></Link>
            <Link to="/profilepage" style={{textDecoration:'none',color:'black'}}> <Button variant="contained" sx={{margin:'10px' ,display:`${AccountIcon?'':'none'}`}}>
                <AccountCircleIcon/>
            </Button>
            </Link>
            <Link to='/login' style={{
              color:'#fff',
              textDecoration:'none'
            }}>   <Button variant="contained" sx={{margin:'10px', backgroundColor:'black' ,display:`${Login?'block':'none'}`}}>Login</Button></Link>
         <Link to='/signup' style={{
              color:'#fff',
              textDecoration:'none'
            }}>   <Button variant="contained" sx={{ backgroundColor:'black' ,display:`${SignUp?'block':'none'}`}}>Signup</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
