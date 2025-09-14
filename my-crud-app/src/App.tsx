import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import EditItem from './pages/EditItem';
import ViewItem from './pages/ViewItem';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
        <Route path="/view/:id" element={<ViewItem />} />
      </Routes>
    </Router>
  );
}
