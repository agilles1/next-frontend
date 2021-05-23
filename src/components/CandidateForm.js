import React from 'react' 
import { connect } from 'react-redux'
import { createNewCandidate } from "../redux/actions/candidateActions.js"

class CandidateForm extends React.Component {
    state ={
        
    }
    render(){
        return(
            <div>
                hi
            </div>
        )
    }
}


export default connect(null, { createNewCandidate})(CandidateForm)