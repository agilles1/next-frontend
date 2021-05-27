import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AuditionForm from '../components/AuditionForm.js'
import Audition from '../components/Audition.js'
import Auditions from '../components/Auditions.js'



class AuditionsContainer extends React.Component {

    render(){
        return (
            <div>
                {/* <Redirect strict path="/" to="/auditions"/> */}
                <Switch>                 
                    <Route exact path='/auditions' component={Auditions}/>
                    <Route exact path='/auditions/new' render={(routerProps) => <AuditionForm {...routerProps}/>}/>
                    <Route path='/auditions/:id' component={Audition}/>
                    <Redirect from="/" to="/auditions" />
                </Switch>
                
            </div>
        )
    } 
}

export default AuditionsContainer