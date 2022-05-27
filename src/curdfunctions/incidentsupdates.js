import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteIncidents,updateIncidents,findAllIncidents } from "../action/actionfun";

function UpdateIncidents(props){
    const [incidentId,setIncindetId]=useState(0)
    const [incidentName, setIncidentName] = useState('')
    const [anyInjuries, setAnyInjuries] = useState('')   
    const [injuryDescription, setInjuryDescription] = useState('')
    const [nameError, setNameError] = useState('')
    const [injuriesError, setInjueriesError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [iderror,setIdError]=useState(0)
    useEffect(()=>{
            props.mydispatch(findAllIncidents())
        },[])
return (
    <div style={{position:'relative',left:350,top:-200}}>
         <span style={{color:"black"}}><h3>Enter Id</h3></span>
    <input type='text' style={{height:30,width:250}}
    onChange={(e)=>{
        let ids =e.target.value
        if(ids==0){
            setIdError('id not found')
        }
        else {
            setIncindetId(e.target.value)
            setIdError('')
        }
    }}></input><br/>
    <span style = {{ color: 'red' }}> {iderror} </span><br/>
  <span style = {{color: "black"}} > <h3> Enter Incident Name </h3></span>

<input type='text' data-testid="incidentName" 
   onChange = {
    (e) => {
        let nam = e.target.value

        if (nam.length < 4 || nam.length >= 20) {
            setNameError('name should be more than 4 charatcters')
        } 
        else {
            setIncidentName(e.target.value)
            setNameError('')
        }

    }
}/><br/>
 <span style = {{color: 'red'}} > { nameError } </span><br/>

 <span style = {{ color: 'black' }} > <h3> Enter Any injuries </h3></span >
        <input type='text' data-testid="anyInjuries" 
        onChange = {
            (e) => {
                setAnyInjuries(e.target.value)
                let add = e.target.value
                var addexp = String(add).toLowerCase().match("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s)$")
                if (addexp || add <= 200 || add == null) {
                    setInjueriesError('address is mandatory ')
                } else {
                    setAnyInjuries(e.target.value)
                    setInjueriesError('')
                }
            }
        }/><br/>
        <span style = { { color: 'red' } } > {injuriesError } </span><br/>


  <span style = {{color: "black"}} > <h3> Enter Injury Description </h3></span>
<input type='text' data-testid="injuryDescription" 
   onChange = {
    (e) => {
        let nam = e.target.value

        if (nam.length < 4 || nam.length >= 20) {
            setDescriptionError('name should be more than 4 charatcters')
        } 
        else {
            setInjuryDescription(e.target.value)
            setDescriptionError('')
        }

    }
}/><br/>
 <span style = {{color: 'red'}} > { descriptionError } </span><br/>
 <div style={{position:"relative",left:0,top:0}}>
     <input type = 'submit' style={{color:'black',backgroundColor:'#00C9A7',height:30,width:80}} value = 'Update' 
     onClick={()=>{
        var inju = {
            "incidentId":incidentId,
            "incidentName":incidentName,
            "anyInjuries":anyInjuries,
            "injuryDescription":injuryDescription
       }
       props.mydispatch(updateIncidents(inju))
       console.log(inju)
   }
     }/>
     </div>
     <div style={{position:"relative",left:100,top:-30}}>
       <input type='button' style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}}value ='Delete' onClick={()=>{
         props.mydispatch(deleteIncidents(incidentId))
     }}/> </div>
    </div>)
}
const mapDispatchToProps = dispatch => ({
    mydispatch: dispatch
})
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps,mapDispatchToProps)(UpdateIncidents)