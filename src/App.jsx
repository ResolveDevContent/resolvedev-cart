import './App.css'
import { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

function App() {
  useEffect(() => {
    initMercadoPago('', { locale: 'es-AR' });
  }, []);

  return (
    <div>
      <Wallet initialization={{preferenceId: ''}} />
    </div>
  );
}

export default App
