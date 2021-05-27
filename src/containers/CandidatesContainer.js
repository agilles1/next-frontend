import React from 'react' 
import { connect } from 'react-redux'
import CandidateForm from '../components/CandidateForm.js'
import Candidate from '../components/Candidate.js'
import { getCandidates } from '../redux/actions/candidateActions.js'
import { Button, OverlayTrigger, Popover } from "react-bootstrap"


class CandidatesContainer extends React.Component {
    state = {
        show: false
    }

    toggleForm= () => {
        this.setState({show: !this.state.show})
    }

     
    render(){
       
        let candidates = []

        if(this.props.candidates){
            candidates = this.props.candidates.map(candidate => (
                    <Candidate key={candidate.id} candidate={candidate}/>   
            ))
        }

        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Add New Candidate</Popover.Title>
              <Popover.Content>
                <CandidateForm hideForm={this.toggleForm}/>
              </Popover.Content>
            </Popover>)
    

        return (
          <div>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success">Add New Candidate</Button>
            </OverlayTrigger>
              <hr/>
                {candidates}
          </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        audition: state.audition.id, 
        candidates: state.audition.candidates
    }
};

export default connect(mapStateToProps, { getCandidates })(CandidatesContainer)