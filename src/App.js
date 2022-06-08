import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import CounterApp from "./pages/CounterApp";
import TodoApp from "./pages/TodoApp"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<CounterApp />} Counter >App</Route>
        <Route path="/todos" element={<TodoApp />} >Todo App</Route>
      </Routes>
    </div >
  );
}

export default App;
