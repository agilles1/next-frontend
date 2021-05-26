import React from 'react'
import { Card } from 'react-bootstrap'

class Candidate extends React.Component{

    render(){
        let candidate = this.props.candidate 
        let room = null

       !!candidate.room? room = candidate.room.name : room = "Completed"

        return(
            <Card>
                <Card.Body>{candidate.number} | {candidate.name} | {room} </Card.Body>
            </Card>
        )
    }
}

export default Candidate