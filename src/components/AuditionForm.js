import React from "react";
import { createAudition } from "../redux/actions/auditionActions";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap'

class AuditionForm extends React.Component {
    state = {
        date: "",
        time: "",
        instrument: "", 
        rooms: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAudition(this.state, this.props.history)
    }

    handleChange = (e) => {
        this.setState(
           {[e.target.name]: e.target.value}
        )
    }

    render() {
        return (
            
            <div>
                <h3>Start New Audition</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Date</label>
                    <input type="date" name="date" onChange={this.handleChange}/>
                    <label>Start Time</label>
                    <input type="time" name="time" onChange={this.handleChange}/>
                   
                    <hr/>
                    <label>Instrument</label>
                    <br/>
                    <input type="text" name="instrument" value={this.state.instrument} onChange={this.handleChange}/>
                    <hr/>
                    <label>Individual Warm-Up Rooms (listed in fill order)</label>
                    <br/>
                    <input type="text" name="rooms" value={this.state.rooms} onChange={this.handleChange}/>
                    <hr/>
                    <Button variant="success" type="submit">Start</Button>
                    
                </form>
            </div>
        )
    }
}

export default connect(null, { createAudition })(AuditionForm)