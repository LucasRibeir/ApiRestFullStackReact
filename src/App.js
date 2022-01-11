import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent/>} />
            <Route path="/employeers" element={<ListEmployeeComponent/>}/>
         </Routes> 
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
