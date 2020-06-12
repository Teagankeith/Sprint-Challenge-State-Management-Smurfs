import React from "react"
import { connect } from "react-redux"
import { getSmurfs } from "../actions/index"

import Smurf from "./Smurf"


const Smurfs = props => {
   const getSmurfHandler = e =>{
       e.preventDefault();
       props.getSmurfs();
   }
   
    return (
        <div smurfs>
        {
           props.isFethcingData ? (
               props.smurfs.map((smurf) => {
            return <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
        })
        ) : ( 
            <>
            <h1>Fetch your smurfs!</h1>
            </>
        )
           
        }
        
        <button id="get-smurf-btn"
                onClick={getSmurfHandler}
                > Get Smurfs! </button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFethcingData: state.isFethcingData
    }
}

export default connect(mapStateToProps, {getSmurfs} )(Smurfs)