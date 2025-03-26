import './App.css';
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from './Screens/Members';
import Events from './Screens/Events';
import Clubs from './Screens/Clubs';
import Secxjsec from './Screens/Secxjsec';
import Rules from './Screens/Rules';

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Homepage" element={<Home />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/ClubMembers" element={<Secxjsec />} />
        <Route path="/Rules" element={<Rules />} />
      </Routes>
    </Router>
  );
}

export default App;
