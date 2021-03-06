//repsonsible for updating the store with auditon info

const auditionReducer = (state = [], action) => {
    switch(action.type){
        case "CREATE_AUDITION_SUCCESS":
            return action.payload;
        case "GET_AUDITION_SUCCESS":
            return action.payload;
        case "CREATE_CANDIDATE_SUCCESS":
            return action.payload
        case "UPDATE_CANDIDATE_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default auditionReducer

// {...state, candidates: state.candidates.concat(action.payload)}
// Checkout Redux docs. Style guide. https://redux.js.org/style-guide/style-guide