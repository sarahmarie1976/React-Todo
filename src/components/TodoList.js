import React from 'react';
import Todo from './Todo';
import { Form, FormGroup, Button, Input, Card } from 'reactstrap';


const TodoList = (props) => {

    /* BEG: SearchFunctionality  */
    const [searchTerm, setSearchTerm] = React.useState(
        localStorage.getItem('search') || ''
    );
    
    React.useEffect(() => {
        localStorage.setItem('search', searchTerm);
    }, [searchTerm] );
        
    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const searchedTasks = props.tasks.filter(searchedTask => 
        searchedTask.task.toLowerCase().includes(searchTerm.toLowerCase())
    );
    /* END: SearchFunctionality  */

    return (
      <Form  >
        

        <FormGroup style={{margin: "10%", width: "50%", marginLeft: "25%", fontSize: "20px", fontWeight: 'bold'}}>
            <Search search={searchTerm} onSearch={handleSearch} />

      <div className="todo-list" >
        
        {searchedTasks.map((todo) => ( 
          <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
        ))}
        

        <Button  className="clear-btn" onClick={props.clearCompleted} style={{background: '#ADFF2F', color: 'black', fontWeight: 'bold', width: "55%", marginTop: "5%", fontSize:'30px'}} >
          Clear Completed Tasks
        </Button>
      </div>
      </FormGroup>
    </Form>
    );
  };


  /* BEG: SearchFunctionality  */
  const Search = ({ search, onSearch }) => {
  
    return (
      <>
        <Card style={{ background: '#191970'}}>
        <Input 
            id= 'search'
            type='text'
            placeholder='Search Here'
            value={search}
            onChange={onSearch}
            />
            </Card>
            <br />
      </>
    )
  };
  /* END: SearchFunctionality  */

export default TodoList;
