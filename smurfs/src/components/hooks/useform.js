import {useState} from "react";

const useForm = initialValue => {
    const [value, setValue] = useState(initialValue) 
    const handleChanges = newValue => {
        setValue(newValue)
    }

    return [value , handleChanges]
}

export default useForm