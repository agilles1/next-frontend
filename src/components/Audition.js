import React from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import CandidatesContainer from '../containers/CandidatesContainer'
import RoomsContainer from '../containers/RoomsContainer'
import { getAudition } from "../redux/actions/auditionActions"

class Audition extends React.Component {

    componentDidMount(){
     
        this.props.getAudition(this.props.match.params.id)
    }
        
    render(){

        let audition = this.props.audition

        return(
            <div>
                <h3>{audition.instrument} | {Moment(audition.date).format('M-DD-YY HH:MM')}</h3>
                <RoomsContainer/>
                <hr/>
                <CandidatesContainer />
            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        audition: state.audition
    }
}
export default connect(mapStateToProps, { getAudition })(Audition)