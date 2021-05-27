import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { updateCandidate } from '../redux/actions/auditionActions.js'

class Room extends React.Component {

    handleClick = (e, candidate) => {
        if(candidate){
        this.props.updateCandidate(candidate)}
    }

    render(){
        let  currentCandidateObj = this.props.room.candidates.filter(candidate => candidate.audition_id === this.props.audition.id)[0]
        let currentCandidate = "Empty"

        if(!!currentCandidateObj && currentCandidateObj.audition_id === this.props.audition.id ){
            currentCandidate = `${currentCandidateObj.number} | ${currentCandidateObj.name}`
        }

        let icon = <HourglassEmptyIcon className="float-right"/>

        if(currentCandidate !== "Empty"){
            icon = <DirectionsWalkIcon className="float-right" />
        }

    return (
        <Card onClick={(event)=> this.handleClick(event, currentCandidateObj)} bg={"success"} text={"light"} style={{ width: '18rem' }}  >
            <Card.Body>
                {icon}
                <Card.Title>{this.props.room.name}</Card.Title>
                <Card.Subtitle className="font-weight-light">Current:</Card.Subtitle>
                <Card.Text>
                {currentCandidate}
                </Card.Text>
            </Card.Body>
        </Card>
        );
    }

  }

  const mapStateToProps = state => {
      return {
        audition: state.audition
      }
  }

  export default connect(mapStateToProps, { updateCandidate })(Room)
