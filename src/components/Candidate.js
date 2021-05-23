import React from 'react'

class Candidate extends React.Component{

    render(){
        let candidate = this.props.candidate 
        return(
            <div>
                {candidate.name} - {candidate.number} - {candidate.room.name}
            </div>
        )
    }
}

export default Candidate