import './App.css';
import Products from './ui/Product';
import { TodoForm } from './ui/TodoForm';
import { Todos } from './ui/Todos';

function App() {
  return (
    <>
      <TodoForm></TodoForm>
      <Todos></Todos>
      <Products></Products>
    </>
  );
}

export default App;
