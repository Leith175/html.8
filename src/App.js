import Profile from './components/Profile/Profile'
import FullName from './components/Profile/FullName';
import Adresse from './components/Profile/Address';
import './App.css';

function App() {
  return (
    <div className="App">
     <Profile />
     <FullName />
     <Adresse />
    </div>
  );
}


export default App;
