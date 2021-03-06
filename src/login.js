import Paper from '@mui/material/Paper'
import axios from 'axios'
import './style.css'
import {useNavigate,Link} from 'react-router-dom'
import {useState} from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material';
import pic from './images/safety.png'
import pic1 from './images/bg.jpg'
import { Avatar, List } from '@mui/material'

import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";


function Login(){
    const [useremail,setUserId]=useState('')
    const [password,setPassword]=useState('')
    const [status,setStatus]=useState('')
    const [message,setMessage]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passworderror,setPasswordError]=useState('')
    const navigate=useNavigate()


 
    return(<>
      <Avatar alt="image" src={pic} sx={{position:"relative",
           left:250,top:80,
          width:100,height:100}}/>

    
     <TextField sx={{postion:'realtive',left:200,top:100}}
                   inputProps={{"data-testid":"useremail"}}
                   value={useremail}
                   helperText="Please enter your Email"
                 
                   label="Email" 
                    // data-testid="useremail" 
                       onChange={(e)=>{
                            setUserId(e.target.value)
                        let id=e.target.value
                        var exp=String(id).toLowerCase().match(/\S+@\S+\.\S+/)
                        if(exp){
                            setUserId(e.target.value)
                            setEmailError('')
                        }
                        else{
                            setEmailError('email id is not right format')
                        }
                       
                 }}/>
                 <div style={{color:'red'}}>{emailError}</div><br/>


      <TextField type='password'  style={{postion:'relative',top:120,left:200,color:'ButtonText'}}
      inputProps={{"data-testid":"password"}}
      value={password} 
    //   inputRef={x=>this.password=x}
                 helperText="Please enter Password"
                 id="demo-helper-text-misaligned"
                 label="Password" 
                //  data-testid="password"
            onChange={(e)=>{
                let pass=e.target.value
                if(pass.length<3){
                    setPasswordError('password should be more than 3 characters')
                    // return
                }
                else {
                    setPassword(e.target.value)
                    setPasswordError('')
                }
                   setPassword(e.target.value)
            }}  />
            <div style={{color:'red'}}>{passworderror}</div><br/>
            <br/><br/>
             <Button variant='contained'          
             style={{position:'relative',top:70,left:250,width:25,height:20}}
                data-testid="submitctrl" 
                onClick={()=>{

                    axios.get(`http://localhost:8081/finduser/${useremail}`)
                         .then((res)=>{
                             var data=res.data
                             if(data.role==="user")
                             {
                                 if(useremail!==null || password!==null){
                                     if(data.userEmail===useremail && data.password===password )
                                     {
                                         sessionStorage.setItem('username',data.userEmail)
                                      setStatus('valid user')  
                                 navigate("/home")        
                                     }
                                     else
                                     {
                                         setStatus("invalid details")
                                     }
                                    }
                                     else
                                     {
                                         setStatus('All fields Should be filled')
                                     }
                             }
                             else if(data.role==='admin'){
                                if(data.userEmail===useremail && data.password===password )
                                {
                                    sessionStorage.setItem('username',data.userEmail)
                                    setStatus('valid user')  
                                    
                            navigate("/home")        
                                }
                                else
                                {
                                    setStatus("invalid details")
                                }

                             }
                             else
                             {
                                 setStatus("not an User!!!")
                             }
                            })



                        }} >Login</Button><br/>
                      <div style={{position:'relative',top:34,left:330}}>
                     <p class="text"><b>New User?</b> <Link to="/register"><b>Register</b></Link>  </p> 
                     </div>  
                        <label data-testid='msglbl'>{status}</label>
                        {message}
                          
</>)
}
export default Login;