export const getAuditions = () => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/auditions/`)
        .then(res => res.json())
        .then(data =>  dispatch({ type: "GET_AUDITIONS_SUCCESS", payload: data}))
    }
}