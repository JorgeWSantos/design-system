import { useEffect, useState } from 'react';
import { ToastContainer, ToastMessage, ToastCloseButton } from './styles';
import { Text } from '@components/Text';
import { XIcon } from '@abqm-ds/icons';
import { ToastOptions } from './types';
import { colors } from '@abqm-ds/tokens';

type ToastType = 'info' | 'success' | 'error' | 'warning';

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
  callbackFunction?: () => void;
  timeout: number;
}

let toastId = 0;
let addToastHandler: ((toast: ToastItem) => void) | null = null;

export const ToastRoot = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    addToastHandler = (toast: ToastItem) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
        if (typeof toast.callbackFunction === 'function') toast.callbackFunction();
      }, toast.timeout);
    };
    return () => {
      addToastHandler = null;
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
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
            <XIcon width={16} height={16} fill={colors.white} />
          </ToastCloseButton>
        </ToastMessage>
      ))}
    </ToastContainer>
  );
};

export class Toast {
  static show(options: ToastOptions) {
    if (addToastHandler) {
      addToastHandler({
        id: ++toastId,
        message: options.message,
        type: options.type ?? 'info',
        callbackFunction: options.callbackFunction,
        timeout: options.timeout ?? 3000,
      });
    } else {
      // Optionally warn if ToastRoot is not mounted
      // console.warn('ToastRoot is not mounted');
    }
  }
}
