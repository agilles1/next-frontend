import React from "react";
import { createAudition } from "../redux/actions/auditionActions";
import { connect } from "react-redux";
import { Button, Form } from 'react-bootstrap'

class AuditionForm extends React.Component {
    state = {
        date: "",
        time: "",
        instrument: "", 
        rooms: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        debugger
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
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" name="time" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Instrument</Form.Label>
                        <Form.Control as="select" name="instrument" value={this.state.instrument} onChange={this.handleChange}>
                            <option>-</option>
                            <option>Flute</option>
                            <option>Oboe</option>
                            <option>Clarinet</option>
                            <option>Bassoon</option>
                            <option>Horn</option>
                            <option>Trumpet</option>
                            <option>Trombone</option>
                            <option>Tuba</option>
                            <option>Percussion</option>
                            <option>Timpani</option>
                            <option>Keyboard</option>
                            <option>Violin 1</option>
                            <option>Violin 2</option>
                            <option>Viola</option>
                            <option>Cello</option>
                            <option>Bass</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Warm-Up Rooms</Form.Label>
                        <Form.Control type="text" name="rooms" value={this.state.rooms} onChange={this.handleChange}/>
                        <Form.Text>Listed in fill order</Form.Text>
                    </Form.Group>
                  
                    <Button variant="success" type="submit">
                        Start
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, { createAudition })(AuditionForm)