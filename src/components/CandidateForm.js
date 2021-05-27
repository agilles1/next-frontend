import React from 'react' 
import { connect } from 'react-redux'
import { createNewCandidate, getAudition } from "../redux/actions/auditionActions.js"
import { Button } from "react-bootstrap"

class CandidateForm extends React.Component {
    state ={
        name: "",
        email: "", 
        phone: "",
        audition_id: this.props.audition
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewCandidate(this.state)
        this.setState({
            name: "",
            email: "", 
            phone: ""})
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
                    <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="phone" value={this.state.phone} placeholder="Phone" onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <Button variant="success" size="sm" type="submit">Add</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        audition: state.audition.id
    }
}
export default connect(mapStateToProps, { createNewCandidate, getAudition })(CandidateForm)