import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import Button from '../components/Button';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import type { Item } from '../types/Item';

export default function EditItem() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [item, setItem] = useState<Item | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/${id}`);
      setItem(res.data);
      setName(res.data.name);
      setDescription(res.data.description);
    } catch {
      setNotification('Erro ao carregar item!');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put(`/${id}`, { name, description });
      setNotification('Item atualizado com sucesso!');
      setTimeout(() => navigate('/'), 1500);
    } catch {
      setNotification('Erro ao atualizar item!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Editar Item</h1>

      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}

      {loading ? (
        <Loader />
      ) : item ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Nome:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Digite o nome do item"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>

          <label className="flex flex-col">
            Descrição:
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Digite a descrição do item"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>

          <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500">
            Atualizar Item
          </Button>
        </form>
      ) : (
        <p className="text-center text-gray-600">Item não encontrado</p>
      )}
    </div>
  );
}
