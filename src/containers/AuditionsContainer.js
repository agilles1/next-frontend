import React from 'react'
import { Route} from 'react-router'
import { connect } from "react-redux";
import AuditionForm from '../components/AuditionForm.js'
import Audition from '../components/Audition.js'

class AuditionsContainer extends React.Component {

    render(){
        return (
            <div>
                 <Route exact path='/auditions/new' component={AuditionForm} />
                 <Route path='/auditions/:id' render={(routerProps) => <Audition {...routerProps} audition={this.props.audition}/>} />
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    
    return {
        audition: state
    }
};

export default connect(mapStateToProps)(AuditionsContainer)