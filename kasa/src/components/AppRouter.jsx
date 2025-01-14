import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import FicheLogement from '../pages/FicheLogement';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/a-propos"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/fiche-logement/:id"
          element={
            <Layout>
              <FicheLogement />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
