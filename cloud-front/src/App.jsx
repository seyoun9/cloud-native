import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<ListEmployeeComponent />}/>
            <Route path='/employees' element={<ListEmployeeComponent />}/>
            <Route path='/add-employee' element={<EmployeeComponent />}/>
            <Route path='/edit-employee/:id' element={<EmployeeComponent />}/>
            <Route path='/view-employee/:id' element={<EmployeeComponent />}/>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
