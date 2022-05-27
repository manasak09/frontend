import { connect } from "react-redux";
import { findAllDefinedAction } from "../action/actionfun";
import { useEffect } from "react";
import { Card,CardContent } from "@mui/material";


function ViewAllPreDefined(props){
    useEffect(()=>{
        props.mydispatch(findAllDefinedAction())
        
    },[])
    return <><div style={{position:'relative',top:-100,left:200}}>
         <h3>Enterd Details</h3>
      <Card  sx={{width:400,top:0}}>
     
                <CardContent> 
    <ul>
        {
        props.data.map((e)=>{
            return <li>{e.personName} {e.personAddress} {e.mobile}</li>
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
    
        export default connect(mapStateToProps,mapDispatchToProps)( ViewAllPreDefined)