import { BrowserRouter } from 'react-router-dom';
import { ToastProvider as NotificationsProvider } from 'react-toast-notifications';

import { ToastProvider } from './toast';

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <BrowserRouter>
      <NotificationsProvider>
        <ToastProvider>{children}</ToastProvider>
      </NotificationsProvider>
    </BrowserRouter>
  );
};
