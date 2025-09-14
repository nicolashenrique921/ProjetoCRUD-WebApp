import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import type { Item } from '../types/Item';
import Button from '../components/Button';
import Notification from '../components/Notification';

export default function EditItem() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [item, setItem] = useState<Item | null>(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [notification, setNotification] = useState<string | null>(null);

    // Função fetchItem fixada com useCallback
    const fetchItem = useCallback(async () => {
        if (!id) return;
        try {
            const res = await api.get(`/${id}`);
            setItem(res.data);
            setName(res.data.name);
            setDescription(res.data.description);
        } catch {
            setNotification('Erro ao carregar item!');
        }
    }, [id]);

    // useEffect com dependência fetchItem
    useEffect(() => {
        fetchItem();
    }, [fetchItem]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!item) return;

        try {
            await api.put(`/${item.id}`, { name, description });
            setNotification('Item atualizado com sucesso!');
            navigate('/');
        } catch {
            setNotification('Erro ao atualizar item!');
        }
    };

    if (!item) return <p>Carregando...</p>;

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Editar Item</h1>

            {notification && (
                <Notification message={notification} onClose={() => setNotification(null)} />
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium mb-1">
                        Nome
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite o nome do item"
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block font-medium mb-1">
                        Descrição
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Digite a descrição do item"
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500">
                    Salvar Alterações
                </Button>
            </form>
        </div>
    );
}
