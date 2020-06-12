import axios from "axios"

export const INIT_LOAD = "INIT_LOAD"
export const GET_SMURFS = "SHOW_SMURFS";
export const ADD_SMURF = "ADD_SMURF"
export const CALL_ERROR= "CALL_ERROR"


export const getSmurfs = () => dispatch => {
    dispatch({type: "INIT_LOAD"})
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log(res)
        dispatch({type: "SHOW_SMURFS", payload: res.data})
    })
    .catch(err => {
        console.log("An Error Happened", err)
        dispatch({type: "CALL_ERROR", payload: 'Cannot fetch data'})    
    
    })
}

export const addSmurf = (newSmurf) => dispatch => {
    axios
    .post ("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
        console.log(res)
        dispatch({type: ADD_SMURF, payload: res.data})
    })
    .catch(err => {
        console.log("An error happene", err)
    })

}