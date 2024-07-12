import './App.css';
import { TodoForm } from './ui/TodoForm';
import { Todos } from './ui/Todos';
import Products from './ui/Product';

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
