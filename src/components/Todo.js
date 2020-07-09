import React from 'react';
import {  Card, CardBody } from 'reactstrap';

const Todo = (props) => {
    return (
        <Card style={{ background: '#B0E0E6'}}>
            <CardBody>
        <div
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodo(props.todo.id)}>
      <p>{props.todo.task}</p>
    </div>
    </CardBody>
    </Card>
  );
};

export default Todo;