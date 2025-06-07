import { createContext, useCallback, useContext, useState, ReactNode } from 'react';
import { ToastContainer, ToastMessage, ToastCloseButton, ToastContent } from './styles';
import { Text } from '@components/Text';
import { XIcon } from '@abqm-ui2/icons';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: number;
  message: string;
  type?: ToastType;
}

interface ToastContextProps {
  showToast: (message: string, type?: ToastType, timems?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

let toastId = 0;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = 'info', timems: number = 3000) => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        removeToast(id);
      }, timems);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer>
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} $type={toast.type}>
            <Text fontSize="ssm" lineHeight="tight">
              {toast.message}
            </Text>
            <ToastCloseButton
              aria-label="Fechar"
              onClick={() => removeToast(toast.id)}
              type="button"
            >
              <XIcon width={16} height={16} />
            </ToastCloseButton>
          </ToastMessage>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
