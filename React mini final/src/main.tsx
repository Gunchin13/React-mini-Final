import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import TanstackProvider from './provider/TanstackProvider';

createRoot(document.getElementById('root')!).render(

    <TanstackProvider>
      <App />
    </TanstackProvider>
    
  
);

