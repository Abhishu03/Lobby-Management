import logo from './logo.svg';
import './App.css';
import { Route , Routes} from 'react-router-dom'
import Usersdetails from './Component/Usersdetails';
import Userregister from './Component/Userregister';
import Navbar from './Component/Navbar';
import Login from './Component/Userlogin';
import Home from './Component/Home';
import ExistLogin from './Component/ExistUserLogin';
import FunGame from './Component/Fungame';
import ReactHelmet from 'react-helmet';


function App() {
  return (
    <>
    <ReactHelmet>
      <title>Lobby Management</title>
    </ReactHelmet>
   
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Usersdetails'  exact element={<Usersdetails/>}/>
      <Route path='/register' exact element={<Userregister/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/existlogin' exact element={<ExistLogin/>}/>
      <Route path='/fungame' exact element={<FunGame/>}/>
    </Routes>
    </>
  );
}

export default App;
