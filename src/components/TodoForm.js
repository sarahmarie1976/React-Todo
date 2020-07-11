import React from 'react';
import { Form, FormGroup, Button, Input, CardBody, Card } from 'reactstrap';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: '',
        };
    }

handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // bcj: e.target.name
};

submitTodo =(e) => {
    e.preventDefault();
    this.setState({ todo: '' });
    this.props.addTodo(e, this.state.todo);
};

render() {
    console.log('rendering form');
    return(
        <Form onSubmit={this.submitTodo}>
            <FormGroup style={{margin: "5%", width: "50%", marginLeft: "25%"}}>
                <Card style={{ background: '#191970'}}>
                    
                <Input
                    type='text'
                    value={this.state.todo}
                    name='todo'
                    onChange={this.handleChanges}
                />
            
                </Card>

                <Button style={{background: '#ADFF2F', color: 'black', fontWeight: 'bold', width: "30%", marginTop: "5%", fontSize:'30px' }} >Add Task</Button>
            </FormGroup>
        </Form>
    )  
}

}


export default TodoForm;