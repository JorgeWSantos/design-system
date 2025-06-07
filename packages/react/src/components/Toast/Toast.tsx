import { createContext, useCallback, useContext, useState, ReactNode } from 'react';
import { ToastContainer, ToastMessage, ToastCloseButton } from './styles';
import { Text } from '@components/Text';
import { XIcon } from '@abqm-ui2/icons';
import { ShowToastFn, Toast, ToastContextProps } from './types';

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

let toastId = 0;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast: ShowToastFn = useCallback(
    (message, type = 'info', timems = 3000, callbackFunction) => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        removeToast(id);
        if (typeof callbackFunction === 'function') callbackFunction();
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
