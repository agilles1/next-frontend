import React from 'react' 
import { connect } from 'react-redux'
import CandidateForm from '../components/CandidateForm.js'
import Candidate from '../components/Candidate.js'

class CandidatesContainer extends React.Component {
state = {
    show: false
}

    handleClick= () => {
        this.setState({show: !this.state.show})
    }

    showForm = () => {
       return <CandidateForm />
    }
    
       render(){
    
        // let candidates = this.props.candidates.map((candidate) => (
        //     <Candidate candidate={candidate}/>))

        return (
          <div>
              <button onClick={this.handleClick }>Add New Candidate</button>
              {this.state.show? this.showForm() : null}
              {/* {candidates} */}
          </div> 
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        candidates: state.candidates
    }
};

export default connect(mapStateToProps)(CandidatesContainer)