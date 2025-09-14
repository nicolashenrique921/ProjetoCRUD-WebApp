import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Criar Item</Link></li>
      </ul>
    </nav>
  );
}
