import { connect } from "react-redux";
import { findAllInjueries } from "../action/actionfun";
import { useEffect } from "react";
import { Card,CardContent } from "@mui/material";



function ViewAllInjuries(props){
    useEffect(()=>{
        props.mydispatch(findAllInjueries())
        
    },[])
    return <><div style={{position:'relative',top:-100,left:200,border:2}}>
         
       
    <ul><table border='2' cellPadding={5}>
    <h3>Enterd Details</h3>
      <tr>
      <th>PersonName</th>
      <th>PersonAddress</th>
      <th>Mobile </th>
      <th>Injury Date</th>
      </tr>
        {
        props.data.map((e)=>{
            return  <tr>{e.InjuryId}<td>{e.personName}</td><td> {e.personAddress}</td><td> {e.mobile}</td><td> {e.injuryDate}</td></tr>
        })
    }
       </table> </ul>
       
        </div>
       
              
            
          </>
}
        const mapStateToProps=state=>({
            data:state
        })
        
        const mapDispatchToProps=dispatch=>({
            mydispatch:dispatch
        })
    
        export default connect(mapStateToProps,mapDispatchToProps)(ViewAllInjuries)
