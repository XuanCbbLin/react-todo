import './App.css';
import { TodoForm } from './ui/TodoForm';
import { Todos } from './ui/Todos';
import Products from './ui/Product';
import Count from './ui/Count';

function App() {
  return (
    <>
      <Count></Count>
      <TodoForm></TodoForm>
      <Todos></Todos>
      <Products></Products>
    </>
  );
}

export default App;
