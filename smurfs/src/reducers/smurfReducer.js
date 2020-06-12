const intialSmurfState = {
    smurfs: [{
      }],
      isFetchingData : false
}



const smurfReducer = (state = intialSmurfState, action) => {
    switch(action.type) {
        case "INIT_LOAD" :
            return {
                ...state,
                isFethcingData: true,
            }   
        case "SHOW_SMURFS" :
            return {
                ...state,
                isFetchingData: false,
                smurfs: action.payload
            }
        default:
            return state;
    }
}


export default smurfReducer;