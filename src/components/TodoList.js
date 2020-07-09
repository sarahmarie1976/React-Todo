import React from 'react';
import Todo from './Todo';
import { Form, FormGroup, Button } from 'reactstrap';


const TodoList = (props) => {
    return (
    <Form  >
        <FormGroup style={{margin: "10%", width: "50%", marginLeft: "25%"}}>
      <div className="todo-list" >
        {props.tasks.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
        ))}
        <Button  className="clear-btn" onClick={props.clearCompleted} style={{background: '#ADFF2F', color: 'black', fontWeight: 'bold', width: "40%", marginTop: "5%", fontSize:'30px'}} >
          Clear Completed Tasks
        </Button>
      </div>
      </FormGroup>
    </Form>
    );
  };

export default TodoList;
