
import './App.css';
import {AddTodo} from "./components/addtodo"
import Addtodomain from './CRUD components/Addtodo';
import Todo from './CRUD components/Todo';

function App() {
  return (
    <div className="App">
    
    {/* <AddTodo/> */}

    <br/>
    <hr/>
    <Todo/>
    <br/>
    <hr/>
    </div>
  );
}

export default App;
