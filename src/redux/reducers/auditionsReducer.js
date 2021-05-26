const auditionsReducer = (state = [], action) => {
    switch(action.type){
        case "GET_AUDITIONS_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default auditionsReducer
