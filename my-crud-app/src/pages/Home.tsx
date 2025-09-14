import { useEffect, useState } from 'react';
import { api } from '../api/api';
import type { Item } from '../types/Item';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Notification from '../components/Notification';
import Loader from '../components/Loader';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await api.get('');
      setItems(res.data);
    } catch {
      setNotification('Erro ao carregar itens!');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/${id}`);
      setNotification('Item excluído com sucesso!');
      fetchItems();
    } catch {
      setNotification('Erro ao excluir item!');
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Lista de Itens</h1>

      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}

      <div className="flex flex-col md:flex-row md:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Pesquisar itens..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Link to="/create">
          <Button className="w-full md:w-auto">Criar Novo Item</Button>
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 bg-white flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
              </div>
              <div className="flex justify-between">
                <Link to={`/edit/${item.id}`}>
                  <Button className="bg-yellow-400 hover:bg-yellow-500">Editar</Button>
                </Link>
                <Button
                  className="bg-red-500 hover:bg-red-600"
                  onClick={() => handleDelete(Number(item.id))}
                >
                  Excluir
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
