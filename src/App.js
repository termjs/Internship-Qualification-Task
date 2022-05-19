import NewForm from "./pages/NewForm";
import Details from "./pages/Details";
import ListPage from "./pages/List";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return <div>

    <Router>
    <Routes>
    <Route path='/' element={<ListPage/>} />
      <Route path='/newformpage' element={<NewForm/>} />
      <Route path='/detailspage' element={<Details/>} />
      </Routes>
    </Router>
  </div>;
}

export default App;
