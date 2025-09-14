import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { useParams, Link } from 'react-router-dom';
import type { Item } from '../types/Item';
import Button from '../components/Button';

export default function ViewItem() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (id) fetchItem(id);
  }, [id]);

  const fetchItem = async (id: string) => {
    const res = await api.get(`/${id}`);
    setItem(res.data);
  };

  if (!item) return <div className="p-4">Carregando...</div>;

  return (
    <div className="p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
      <p className="mb-4">{item.description}</p>
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
}
