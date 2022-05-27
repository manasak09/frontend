import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addReports,findAllReports } from "../action/actionfun";
 

function AddReports(props){
    const [personName, setPersonName] = useState('')
    const [incidentName, setIncidentName] = useState('')   
    const [jobDescription, setJobDescription] = useState('')
    const [reportStartDate, setReportsStartDate] = useState('')
    const [reportEndtDate, setReportEndtDate] = useState('')
    const [userReport, setUserReport] = useState('')
    const [nameError, setNameError] = useState('')
    const [dateError,setDateError]=useState('')
    
    
    
    useEffect(()=>{
            props.mydispatch(findAllReports())
        },[])

return ( <div style={{position:'relative',left:350,top:-230}}>
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


 <span style = {{color: "black"}} > <h3> Job Description </h3></span>

<input type='text' data-testid="incidentName" 
   onChange = {
    (e) => {
        let nam = e.target.value

        if (nam.length < 4 || nam.length >= 20) {
            setNameError('name should be more than 4 charatcters')
        } 
        else {
            setJobDescription(e.target.value)
            setNameError('')
        }

    }
}/><br/>
 <span style = {{color: 'red'}} > { nameError } </span><br/>


 <span style = {{color: "black"}} > <h3> Enter Reports</h3></span>

<input type='text' data-testid="incidentName" 
   onChange = {
    (e) => {
        let nam = e.target.value

        if (nam.length < 4 || nam.length >= 200) {
            setNameError('name should be more than 4 charatcters')
        } 
        else {
            setUserReport(e.target.value)
            setNameError('')
        }

    }
}/><br/>
 <span style = {{color: 'red'}} > { nameError } </span><br/>

 <span style = {{color: "black"}} > <h3> Enter Starting Date</h3></span>
 <input type='date'  style={{width:160,height:20}} onChange={(e)=>{
        if(e.target.value!=null){
            let dovar=e.target.value.split("-")
            let newdvar=dovar[2]+"-"+dovar[1]+"-"+dovar[0]
            setReportsStartDate(newdvar) 
            setDateError('')

         }
         else{
             setDateError('Date should not null')
         }
        
     }}/><br/>
      <span style = {{color: 'red'}} > { dateError } </span><br/>

      <span style = {{color: "black"}} > <h3> Enter Ending Date</h3></span>
 <input type='date'  style={{width:160,height:20}} onChange={(e)=>{
        if(e.target.value!=null){
            let dovar=e.target.value.split("-")
            let newdvar=dovar[2]+"-"+dovar[1]+"-"+dovar[0]
            setReportEndtDate(newdvar) 
            setDateError('')

         }
         else{
             setDateError('Date should not null')
         }
        
     }}/><br/>
      <span style = {{color: 'red'}} > { dateError } </span><br/>

      < input type = 'button' style = {{color:'black',backgroundColor:'#00C9A7',top:-10,left:30 }} 
         data-testid="savectrl" 
        onClick={()=>{ var inju = {
                "personName":personName,
                "incidentName":incidentName,
                "jobDescription":jobDescription,
                "reportStartDate":reportStartDate,
                "reportEndtDate":reportEndtDate,
                "userReport":userReport
                }
                props.mydispatch(addReports(inju))
                console.log(inju)

        }}
        value = 'SAVE'  /> 

</div>)
}
const mapDispatchToProps = dispatch => ({
    mydispatch: dispatch
})
const mapStateToProps = state => ({
    data: state
})

export default connect(mapStateToProps, mapDispatchToProps)(AddReports);