interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ onClick, children, className = '', type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
