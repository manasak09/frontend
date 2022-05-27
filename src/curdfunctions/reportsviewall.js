import { connect } from "react-redux";
import { findAllReports } from "../action/actionfun";
import { useEffect } from "react";
import { Card,CardContent } from "@mui/material";
function ViewAllReports(props){
    useEffect(()=>{
        props.mydispatch(findAllReports())
        
    },[])   
    return <><div style={{position:'relative',top:-100,left:200}}>
    <h3>Enterd Details</h3>
 <Card  sx={{width:400,top:0}}>

           <CardContent> 
<ul>
   {
   props.data.map((e)=>{
       return <li>{e.personName} {e.incidentName} {e.jobDescription} {e.reportStartDate}
       {e.reportEndtDate} {e.userReport}</li>
   })
}
   </ul>
   </CardContent>
   </Card>
   </div></>

}

const mapStateToProps=state=>({
    data:state
})

const mapDispatchToProps=dispatch=>({
    mydispatch:dispatch
})

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllReports)