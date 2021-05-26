import React from 'react';
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { getAuditions } from '../redux/actions/auditionsActions.js'
import Moment from 'moment'
import { Link } from 'react-router-dom'

class Auditions extends React.Component {
    componentDidMount(){
        this.props.getAuditions()
    }

    render(){
        let auditionCards = this.props.auditions.map(audition => 
            <Link to={`/auditions/${audition.id}`}>
                <Card bg={"success"} text={"light"}>
                    <Card.Header>{Moment(audition.date).format('MMMM DD, YYYY | h:mma')}</Card.Header>
                    <Card.Body>
                        Instrument: {audition.instrument}
                        <br/>
                        Candidates: {audition.candidates.length}
                    </Card.Body>
                </Card>
            </Link>)

            
           
        return(
            <>
                <Button variant="success">Add New Audition</Button>
                
                {auditionCards}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        auditions: state.auditions
    }
}

export default connect(mapStateToProps, { getAuditions })(Auditions)