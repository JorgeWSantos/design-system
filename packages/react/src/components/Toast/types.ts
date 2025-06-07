export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: number;
  message: string;
  type?: ToastType;
}

export type ShowToastFn = (
  message: string,
  type?: ToastType,
  timems?: number,
  callbackFunction?: () => void
) => void;

export interface ToastContextProps {
  showToast: ShowToastFn;
}
