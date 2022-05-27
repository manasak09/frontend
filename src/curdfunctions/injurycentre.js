import { Button, List } from "@mui/material";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addInjury, findAllInjueries } from "../action/actionfun";
import { Outlet } from "react-router-dom";
import { Divider } from "@mui/material";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';

import DeleteIcon from '@mui/icons-material/Delete';

import Avatar from '@mui/material/Avatar';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { deepOrange, green } from '@mui/material/colors';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import SystemUpdate from "@mui/icons-material/SystemUpdate";

function AddInjury(props) {

    return(
    <div>
        
 <div style={{position:'relative',top:200,left:40}}>
        
        <List sx={{width:100}}>
        
        
               <Link to='/home/injurycentre/view'>
               <Button variant="contained" startIcon={<SaveAltIcon/>}>
        View
      </Button>
                   {/* <input type='button' data-testid="viewctrl" 
               style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}} value='View'>
                   </input> */}
                   </Link><br></br>
            
      
               <br></br>
               
               <Link to='/home/injurycentre/update'>
               <Button variant="contained" startIcon={<SystemUpdateIcon />}>
        Update
      </Button>
                   {/* <input type='button'
               style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}}
               data-testid="updatectrl" 
               value='Update'> */}
                   {/* </input> */}
                   </Link><br></br>
                   <br></br>
           

              <Link to='/home/injurycentre/addinjuryfom'>
                  {/* <input type='button'
              style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}}
              data-testid="addctrl" 
              value='ADD'/> */}
                <Button variant="contained" startIcon={<AddBoxIcon />}>
        Add
      </Button>
              </Link>
              
              
               </List>
              
        </div>

       
<div style={{position:'relative',left:300}}><Outlet/></div> 

        
   
    
   
        </div>)

}
    const mapDispatchToProps = dispatch => ({
        mydispatch: dispatch
    })
    const mapStateToProps = state => ({
        data: state
    })

    export default connect(mapStateToProps, mapDispatchToProps)(AddInjury);