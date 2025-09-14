import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
      <p className="text-xl mb-6">Página não encontrada</p>
      <Link to="/">
        <Button>Voltar para Home</Button>
      </Link>
    </div>
  );
}
