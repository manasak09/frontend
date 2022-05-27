import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addInjury, findAllInjueries } from "../action/actionfun";

function InjuryAddform(props){
    const [personName, setPersonName] = useState('')
    const [personAddress, setPersonAddress] = useState('')
        const[injuryDate,setInjuryDate]=useState('')
    const [mobile, setMobile] = useState('')
    const [nameError, setNameError] = useState('')
    const [addressError, setAddressError] = useState('')
        const[dateError,setDateError]=useState('')
    const [mobileError, setMobileError] = useState('')
    const [status,setStatus]=useState('')
        useEffect(()=>{
            props.mydispatch(findAllInjueries())
        },[])

        return(
            <div style={{position:'relative',left:360,top:-100}}>
                
         <span style = {{color: "black"}} > <h3> Enter Person Name </h3></span>

        <input type='text' data-testid="personName" 
           onChange = {
            (e) => {
                let nam = e.target.value

                if (nam.length < 4 || nam.length >= 20) {
                    setNameError('name should be more than 4 charatcters')
                } else {
                    setPersonName(e.target.value)
                    setNameError('')
                }

            }
        }/><br/>
         <span style = {{color: 'red'}} > { nameError } </span><br/>

        <span style = {{ color: 'black' }} > <h3> Enter Person Address </h3></span >
        <input type='text' data-testid="personAddress" 
        onChange = {
            (e) => {
                setPersonAddress(e.target.value)
                let add = e.target.value
                var addexp = String(add).toLowerCase().match("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s)$")
                if (addexp || add <= 200 || add == null) {
                    setAddressError('address is mandatory ')
                } else {
                    setPersonAddress(e.target.value)
                    setAddressError('')
                }
            }
        }/><br/>
        <span style = { { color: 'red' } } > { addressError } </span><br/>
        <span style = {{color: "black"}} > <h3> Enter Date</h3></span>
 <input type='date'  style={{width:160,height:20}} onChange={(e)=>{
        if(e.target.value!=null){
            let dovar=e.target.value.split("-")
            let newdvar=dovar[2]+"-"+dovar[1]+"-"+dovar[0]
            setInjuryDate(newdvar) 
            setDateError('')

         }
         else{
             setDateError('Date should not null')
         }
        
     }}/><br/>
      <span style = {{color: 'red'}} > { dateError } </span><br/>
        <span style = {{ color: 'black' }} > <h3> Enter Mobile Number </h3></span >
          
        <input type='text' data-testid="mobile" 
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
        }/><br/>
          <span style = {{ color: 'red' }}> { mobileError } </span><br/>

          < input type = 'button' style = {{color:'black',backgroundColor:'#00C9A7',top:-10,left:30 }} 
         data-testid="savectrl" 
        onClick={()=>{ var inju = {
                    //  "injuryId" :injuryId,
                    "personName": personName,
                    "personAddress": personAddress,
                     "injuryDate":injuryDate,
                    "mobile": mobile

                }
                props.mydispatch(addInjury(inju))
                console.log(inju)
                setStatus("Saved Enterd Data")

        }}
        value = 'SAVE'  />
        {status}
        </div>
        )
    
}
const mapDispatchToProps = dispatch => ({
    mydispatch: dispatch
})
const mapStateToProps = state => ({
    data: state
})

export default connect(mapStateToProps, mapDispatchToProps)(InjuryAddform);