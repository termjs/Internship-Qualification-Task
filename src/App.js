import NewForm from "./pages/NewForm";
import Details from "./pages/Details";
import FetchAPI from "./pages/List";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' exact element={<FetchAPI />} />
        <Route path='/newformpage' exact element={<NewForm />} />
        <Route path='/detailspage' exact element={<Details />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
