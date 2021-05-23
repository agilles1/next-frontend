export const getAudition = (auditionId) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/auditions/${auditionId}`)
        .then(res => res.json())
        .then(data =>  dispatch({ type: "GET_AUDITION_SUCCESS", payload: data}))
    }
}

export const createAudition = (newAuditionData, history) => {
    return (dispatch) => {
            fetch(`http://localhost:3000/api/v1/auditions`, {
                method: "POST",
                headers: {
                    Accepts: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({audition: newAuditionData})
            })
            .then((res) => {
                if (res.ok) {
                return res.json();
                } else {
                throw new Error(res.statusText);
                }
            })
            .then((data) => {
                dispatch({ type: "CREATE_AUDITION_SUCCESS", payload: data});
                history.push(`/auditions/${data.id}`)
            })

        }
}