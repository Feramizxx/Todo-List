import Todos from "./components/Todos";
// import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";
import TodoProvider from "./components/todos-context";
function App() {
  
  return (
    <div>
      <TodoProvider>
      <NewTodo  />
      <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
