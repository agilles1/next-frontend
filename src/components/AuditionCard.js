import React from 'react' 
import { Card } from 'react-bootstrap'
import Moment from 'moment'
import { Link } from 'react-router-dom'

function AuditionCard({ audition }){
    return (
        <Link to={`/auditions/${audition.id}`}>
            <Card  bg={"success"} text={"light"}>
                <Card.Header>{Moment(audition.date).format('MMMM DD, YYYY | h:mma')}</Card.Header>
                <Card.Body>
                    Instrument: {audition.instrument}
                    <br/>
                    Candidates: {audition.candidates.length}
                </Card.Body>
            </Card>
        </Link>
    )
}

export default AuditionCard