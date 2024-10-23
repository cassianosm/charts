import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditChart from './pages/EditChart';
import Header from './components/Header';
import Footer from './components/Footer';
import { RoutePaths } from './constants';

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path={RoutePaths.Home} element={<Dashboard />} />
          <Route path={RoutePaths.Edit} element={<EditChart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
);

export default App;
