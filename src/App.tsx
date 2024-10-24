import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditChart from './pages/EditChart';
import Header from './components/Header';
import Footer from './components/Footer';
import { RoutePaths } from './constants';
import NotFound from './pages/NotFound';

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Router>
      <Header />
      <main className="flex-grow px-4">
        <Routes>
          <Route path={RoutePaths.Home} element={<Dashboard />} />
          <Route path={RoutePaths.Edit} element={<EditChart />} />
          <Route path={RoutePaths.Not_Found} element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
);

export default App;
