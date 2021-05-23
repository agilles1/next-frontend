import React from 'react' 
import { connect } from 'react-redux'
import { createNewCandidate } from "../redux/actions/candidateActions.js"

class CandidateForm extends React.Component {
    state ={
        name: "",
        email: "", 
        phone: "",
    }

    handleChange = (e) => {
        this.setState(
           {[e.target.name]: e.target.value}
        )
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="phone" placeholder="Phone" onChange={this.handleChange}/>
                    <br/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { createNewCandidate})(CandidateForm)