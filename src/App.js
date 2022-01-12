import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import AddEmployeeComponent from './component/AddEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent/>} />
            <Route path="/employees" element={<ListEmployeeComponent/>}/>
            <Route path = '/add-employee' element={<AddEmployeeComponent/>}/>
         </Routes> 
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
