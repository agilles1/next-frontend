import React, { Component } from "react";
import { createAudition } from "../redux/actions/auditionActions";
import { connect } from "react-redux";

class AuditionForm extends React.Component {
    state = {
        date: "",
        instrument: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAudition(this.state, this.props.history)
    }

    handleChange = (e) => {
        this.setState(
           {[e.target.name]: e.target.value }
        )
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Date & Start Time</label>
                    <br/>
                    <input type="datetime-local" name="date" onChange={this.handleChange}/>
                    <br/>
                    <label>Instrument</label>
                    <br/>
                    <input type="text" name="instrument" value={this.state.instrument} onChange={this.handleChange}/>
                    <br/>
                    <button type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { createAudition })(AuditionForm)