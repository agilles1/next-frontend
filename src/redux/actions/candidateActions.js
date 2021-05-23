

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

export const getCandidates = (auditionId) => {
  debugger
  return (dispatch) => {

  }
}