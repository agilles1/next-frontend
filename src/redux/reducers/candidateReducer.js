//repsonsible for updating the store with candidate info
const candidateReducer = (state = {}, action) => {
    switch(action.type){
        case "CREATE_CANDIDATE_SUCCESS":
            return action.payload;

        default:
            return state;
    }
}

export default candidateReducer

