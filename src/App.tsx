import './App.css';
import { TodoForm } from './ui/TodoForm';
import { Todos } from './ui/Todos';
import Products from './ui/Product';
import { TodoProvider } from './TodoContext';
import { ProductProvider } from './ProductContext';

function App() {
  return (
    <>
      <TodoProvider>
        <TodoForm></TodoForm>
        <Todos></Todos>
        <ProductProvider>
          <Products></Products>
        </ProductProvider>
      </TodoProvider>
    </>
  );
}

export default App;
