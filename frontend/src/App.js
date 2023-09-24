import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AdminScreen from './Screens/AdminScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route  path ="/" exact element={<HomeScreen/>} />
              <Route  path ="/login" exact element= {<LoginScreen/>} />
              <Route  path ="/profile" element={<ProfileScreen />}/>
              <Route path="/admin" element={<AdminScreen/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
