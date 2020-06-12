import React from "react"
import {useState} from "react"
import { addSmurf } from "../actions/index"
// import {useForm} from "./hooks/useform"
import { connect } from "react-redux"

const SmurfForm = (props) => {
    const[smurf, setSmurf] = useState({
        name: "",
        age: 0,
        height: ""
    })
  
    

    const handleChanges = e => {
        let name = e.target.name;
        let value = e.target.value
        setSmurf({...smurf, [name]: value})
    
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newSmurf = {
            ...smurf,
        }
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }


    return (
        <div className="smurfForm">
            <form onSubmit={handleSubmit}>
            <label>Name:&nbsp;</label>
            <input
            type="text"
            name="name"
            onChange={handleChanges}
            />
            <label>Age:&nbsp;</label>
            <input
            type="integer"
            name="age"
            onChange={handleChanges}
            />
            <label>Height:&nbsp;</label>
            <input
            type="text"
            name="height"
            onChange={handleChanges}
            />

            <button id="submit">Add Smurf</button>
            </form>

        </div>
    )
}

export default connect(null, {addSmurf})(SmurfForm)