import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/routes';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
      <BrowserRouter>
        <AnimatePresence mode='wait'>
          <div className="App">
            <Navbar />
            <AppRoutes />
            </div>
        </AnimatePresence>
      </BrowserRouter>  
    );
  }
  
export default App;