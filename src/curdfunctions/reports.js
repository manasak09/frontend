import { useState,useEffect } from "react";
import { List } from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';
import SystemUpdate from "@mui/icons-material/SystemUpdate";
import pic from './images/safety.png'

function Reports(props){
    return(<> <div style={{position:'relative',top:200,left:40}}>
        
    <List sx={{width:100}}>
    <Avatar alt="image" src={pic} sx={{position:"relative",
       left:250,top:80,
      width:100,height:100}}/>
    
           <Link to='/home/reports/view'><input type='button' data-testid="viewctrl" 
           style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}} value='View'></input></Link>
           <Avatar sx={{left:70,top:-33}} variant="rounded">
    <AssignmentIcon />     
  </Avatar>
  
           <br></br>
           
           <Link to='/home/reports/update'><input type='button'
           style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}}
           data-testid="updatectrl" 
           value='Update'></input></Link>
           <Avatar sx={{ left:70,top:-33}} variant="rounded">
    <SystemUpdate/>
  </Avatar>
          <Link to='/home/reports/addreports'><input type='button'
          style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}}
          value='ADD'/></Link>
          
           </List>
          
    </div>

   
<div style={{position:'relative',left:300}}><Outlet/></div> 


  </>




   )
}

export default Reports;