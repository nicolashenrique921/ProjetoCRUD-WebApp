// src/components/Notification.tsx
import { useEffect } from 'react';

interface NotificationProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export default function Notification({ message, type = 'success', onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Fecha automaticamente após 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 rounded shadow text-white font-semibold
        ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
    >
      {message}
    </div>
  );
}
