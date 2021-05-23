import React from 'react'
import { connect } from 'react-redux'
import { getAudition } from "../redux/actions/auditionActions"
import Moment from 'moment'
import CandidatesContainer from '../containers/CandidatesContainer'

class Audition extends React.Component {
    
    componentDidMount(){
        this.props.getAudition(this.props.match.params.id)
    }
    
    render(){

        let audition = this.props.audition.audition

        return(
            <div>
                <h3>{audition.instrument} | {Moment(audition.date).format('M-DD-YY HH:MM')}</h3>
                <CandidatesContainer />
            </div>
        )

    }


}

export default connect(null, { getAudition })(Audition)