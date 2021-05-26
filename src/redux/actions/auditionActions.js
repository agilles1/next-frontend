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

export const createNewCandidate = (newCandidateData) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/auditions/${newCandidateData.audition_id}/candidates`, {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({candidate: newCandidateData})
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(res.statusText);
            }
          })
          .then((data) => {
              dispatch({ type: "CREATE_CANDIDATE_SUCCESS", payload: data})
          })
    }
}

export const updateCandidate = (candidateData) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/auditions/${candidateData.audition_id}/candidates/${candidateData.id}`, {
        method: "PATCH",
        headers: {
            Accepts: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({candidate: candidateData})
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        dispatch({ type: "UPDATE_CANDIDATE_SUCCESS", payload: data})
      })

  }
}