import NewForm from "./pages/NewForm";
import Details from "./pages/Details";
import ListPage from "./pages/List";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' exact element={<ListPage />} />
        <Route path='Internship-Qualification-Task/newformpage' exact element={<NewForm />} />
        <Route path='Internship-Qualification-Task/detailspage' exact element={<Details />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
