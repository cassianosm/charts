import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditChart from './pages/EditChart';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit/:id" element={<EditChart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
);

export default App;
