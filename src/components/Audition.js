import React from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'


class Audition extends React.Component {
        
    render(){

        let audition = this.props.audition

        return(
            <div>
                <h3>{audition.instrument} | {Moment(audition.date).format('M-DD-YY HH:MM')}</h3>
            </div>
        )

    }

}


export default Audition