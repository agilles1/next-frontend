//repsonsible for updating the store with candidate info
const candidateReducer = (state = {candidates: []}, action) => {
    switch(action.type){
        case "CREATE_CANDIDATE_SUCCESS":
            return [...state, ...state.candidates, action.payload];







        default:
            return state;
    }
}

export default candidateReducer
