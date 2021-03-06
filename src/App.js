import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/todoapp' element={
          <RequireAuth>
            <TodoForm></TodoForm>
          </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
