import React from 'react' 
import { CardDeck } from 'react-bootstrap'
import { connect } from 'react-redux'
import Room from '../components/Room.js'

class RoomsContainer extends React.Component {
   
    render(){

        let rooms = [] 

        if(this.props.audition.rooms){
            let singleRooms = this.props.audition.rooms.filter(room => room.name !== "Holding")

            rooms = singleRooms.map(room => (
                <Room key={room.id} room={room} />
            ))
        }


       
        return (
            <CardDeck >
                {rooms}
            </CardDeck>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        audition: state.audition, 
         
        candidates: state.audition.candidates
    }
};

export default connect(mapStateToProps)(RoomsContainer)