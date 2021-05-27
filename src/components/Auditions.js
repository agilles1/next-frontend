import React from 'react';
import { connect } from 'react-redux'
import { Button, CardColumns} from 'react-bootstrap'
import { getAuditions } from '../redux/actions/auditionsActions.js'
import { Link } from 'react-router-dom'
import AuditionCard from './AuditionCard'

class Auditions extends React.Component {
    componentDidMount(){
        this.props.getAuditions()
    }

    render(){
        
        let auditionCards = this.props.auditions.map(audition => <AuditionCard key={audition.id} audition={audition}/>)

        return(
            <div>
                <Link to="/auditions/new">
                    <Button variant="success">Add New Audition</Button>
                </Link>
                <br/>
                <br/>
                <CardColumns>
                    {auditionCards}
                </CardColumns>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auditions: state.auditions
    }
}

export default connect(mapStateToProps, { getAuditions })(Auditions)