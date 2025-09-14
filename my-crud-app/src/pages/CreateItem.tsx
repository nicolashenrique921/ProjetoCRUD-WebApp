import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import Button from '../components/Button';
import Notification from '../components/Notification';
import Loader from '../components/Loader';

export default function CreateItem() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post('', { name, description });
      setNotification('Item criado com sucesso!');
      setTimeout(() => navigate('/'), 1500);
    } catch {
      setNotification('Erro ao criar item!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Criar Novo Item</h1>

      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}

      {loading ? (
        <Loader />
      ) : (
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

          <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
            Criar Item
          </Button>
        </form>
      )}
    </div>
  );
}
