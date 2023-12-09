import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Register from './pages/auth/register.js';
import Login from './pages/auth/login.js';
import BlogForm from './components/BlogForm.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/' element={<HomePage />}/>
      <Route path="/write" element={<BlogForm />} />
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;