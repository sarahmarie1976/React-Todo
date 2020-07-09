import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Form, FormGroup } from 'reactstrap';
import './App.css';



  const tasks = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

  class App extends React.Component {
      constructor() {
        super();
        this.state = {
          tasks
        };
      };
   
  addTodo = (e, todo) => {
    e.preventDefault();
      const newTodo ={
        task: todo, 
        id: Date.now(),
        completed: false,
      };
      this.setState({
        tasks: [...this.state.tasks, newTodo],
      });
  };

  toggleTodo = (todoId) => {
    console.log(todoId);
    this.setState({
      tasks: this.state.tasks.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };
      
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((todo) => !todo.completed),
    });
  };

  
  render() {
    console.log('rendering...');
    return (
      <Form>
        <FormGroup style={{textAlign: "center", color: 'black'}}>
      <div className="App">
        <div className="Header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo ={this.addTodo} />
        </div>
        <TodoList 
          tasks={this.state.tasks}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
          />
      </div>
      </FormGroup>
      </Form>
    );
  }
}

export default App;
