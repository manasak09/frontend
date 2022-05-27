import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteDefinedIncidents,updateDefinedAction,findAllDefinedAction } from "../action/actionfun";


function UpdatePreDefined(props){
    const[id,setId]=useState(0)
 const [personName, setPersonName] = useState('')
 const [personAddress, setPersonAddress] = useState('')
  
 const [mobile, setMobile] = useState('')
 const [nameError, setNameError] = useState('')
 const [addressError, setAddressError] = useState('')
 const [iderror,setIdError]=useState(0)
     
 const [mobileError, setMobileError] = useState('')
     useEffect(()=>{
         props.mydispatch(findAllDefinedAction())
     },[])
 return (<>
 <div style={{left:300,position:"relative",top:-120}}>
 
    <span style={{color:"black"}}><h3>Enter Id</h3></span>
    <input type='text' style={{height:30,width:250}}
    onChange={(e)=>{
        let ids =e.target.value
        if(ids==0){
            setIdError('id not found')
        }
        else {
            setId(e.target.value)
            setIdError('')
        }
    }}></input><br/>
    <span style = {{ color: 'red' }}> {iderror} </span><br/>

     <span style = {{ color: "black" }}> <h3> Enter Person Name </h3></span>
     <input type = 'text'style = {{ height: 40, width: 250 } }
     onChange = {
         (e) => {
             let nam = e.target.value

             if (nam.length < 4 || nam.length >= 20) {
                 setNameError('name should be more than 4 charatcters')
             } 
             else {
                 setPersonName(e.target.value)
                 setNameError('')
             }

         }
     }
     /><br/>
     <span style = {{ color: 'red' }}> { nameError } </span><br/>

     <span style = {
         { color: 'black' } } > <h3> Enter Person Address </h3></span >
     <input type = 'text'
     style = {
         { height: 60, width: 250 } }
     onChange = {
         (e) => {
             let add = e.target.value
             var addexp = String(add).toLowerCase().match("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s)$")
             if (addexp || add <= 200 || add == null) {
                 setAddressError('address is mandatory ')
             } else {
                 setPersonAddress(e.target.value)
                 setAddressError('')
             }
         }
     }
     /><br/>
     <span style = {
         { color: 'red' } } > { addressError } </span><br/>

     <span style = {
         { color: 'black' } } > <h3> Enter Mobile Number </h3></span >
     <input type = 'text'
     style = {
         { height: 30, width: 250 } }
     onChange = {
         (e) => {
             let mob = e.target.value
             var exp = String(mob).match("^(?=.[0-9]).{10}$")
             if (exp || mob.length == 10) {
                 setMobile(e.target.value)
                 setMobileError('')
             } else {
                 setMobileError('Enter valid mobile number')
             }
         }
     }
     /><br/>
     <span style = {{ color: 'red' }}> { mobileError } </span><br/>
     </div>
     <div style={{position:"relative",left:330,top:-120}}>
     <input type = 'submit' style={{color:'black',backgroundColor:'#00C9A7',height:30,width:80}} value = 'Update' 
     onClick={()=>{
        var inju = {
            "id" :id,
           "personName": personName,
           "personAddress": personAddress,      
           "mobile": mobile

       }
       props.mydispatch(updateDefinedAction(inju))
       console.log(inju)
   }
     }/>
     </div>
     <div style={{position:"relative",left:420,top:-150}}>
       <input type='button' style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}}value ='Delete' onClick={()=>{
         props.mydispatch(deleteDefinedIncidents(id))
     }}/> </div>
    
     </>)

 }
 const mapDispatchToProps = dispatch => ({
     mydispatch: dispatch
 })
 const mapStateToProps = state => ({
     data: state
 })
 export default connect(mapStateToProps,mapDispatchToProps)(UpdatePreDefined)






























