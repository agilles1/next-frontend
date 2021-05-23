import React from 'react'
import { Route} from 'react-router'
import { connect } from "react-redux";
import AuditionForm from '../components/AuditionForm.js'
import Audition from '../components/Audition.js'
import { getAudition } from "../redux/actions/auditionActions"
import CandidatesContainer from '../containers/CandidatesContainer'

class AuditionsContainer extends React.Component {

    componentDidMount(){
        this.props.getAudition("1")
    }

    render(){
        return (
            <div>
                 <Route exact path='/auditions/new' component={AuditionForm} />
                 <Audition audition={this.props.audition}/>
                 <CandidatesContainer />
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    
    return {
        audition: state.audition
    }
};

export default connect(mapStateToProps, { getAudition })(AuditionsContainer)