import React from 'react'
import { Route, Switch } from 'react-router'
import AuditionForm from '../components/AuditionForm.js'
import Audition from '../components/Audition.js'
import Auditions from '../components/Auditions.js'



class AuditionsContainer extends React.Component {

    render(){
        return (
            <div>
                <Switch>                  
                    <Route exact path='auditions'>
                        <Auditions/>
                    </Route>
                    <Route exact path='/auditions/new'>
                        <AuditionForm/>
                    </Route>
                    <Route path='/auditions/:id' component={Audition}/>
                </Switch>
                
            </div>
        )
    } 
}

export default AuditionsContainer